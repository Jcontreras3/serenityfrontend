import '../AffirmationsPage/Affirmations.css'
import { useState, useEffect } from "react";
import { Card, Row } from 'react-bootstrap';
import axios from 'axios';
import heart from '../../Assets/heart.png';
import filledheart from '../../Assets/filled-heart.png';
import { GetFavorites } from '../../Service/DataService';

interface Item {
    id: number;
    quote: string;
}

function FavoriteList() {
    const [items, setItems] = useState<Item[]>([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [userInfo, setUserInfo] = useState<number>(0);



    useEffect(() => {
        const UserIdStorage = JSON.parse(sessionStorage.getItem('UserId')!);
        if (UserIdStorage) {
            setUserInfo(UserIdStorage)
        }
    }, []);

    useEffect(() => {
        const getAllFav = (userInfo: number) => {
            axios
                .get<Item[]>(
                    `https://serenitybackendsite.azurewebsites.net/Quotes/PullAllFavorites?userId=${userInfo}`
                )
                .then((response) => {
                    const shuffledItems = response.data.sort(() => Math.random() - 0.5);
                    setItems(shuffledItems);
                })
                .catch((error) => console.error(error));
        };

        getAllFav(userInfo);

    }, [userInfo]);



    const handleFavoriteClick = (userInfo: number, quoteId: number) => {
        fetch(
            `https://serenitybackendsite.azurewebsites.net/Quotes/FavoriteQuote?userId=${userInfo}&quoteId=${quoteId}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                // Add quote to favorites list
                setFavorites((prevFavorites) => [...prevFavorites, quoteId]);
            })
            .catch((error) => console.error(error));
    };

    const handleRemoveClick = (userInfo: number, quoteId: number) => {
        fetch(
            `https://serenitybackendsite.azurewebsites.net/Quotes/RemoveFavoriteQuote?userId=${userInfo}&quoteId=${quoteId}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                // Remove quote from favorites list
                setFavorites((prevFavorites) =>
                    prevFavorites.filter((id) => id !== quoteId)
                );
            })
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        // Retrieve list of favorites from local storage when component mounts
        const storedFavorites = JSON.parse(localStorage.getItem("favoriteQuotes") || "[]");
        setFavorites(storedFavorites);
    }, []);


    return (
        <div className='card-spacing'>
            {items.map(item => (
                <div key={item.id}>
                    <Card className='all-quotes-cards'>
                        <a
                             onClick={() =>
                                favorites.includes(item.id)
                                  ? handleRemoveClick(userInfo, item.id)
                                  : handleFavoriteClick(userInfo, item.id)
                              }
                        >
                            {favorites.includes(item.id) ? (
                                <Row className='heart-row'>
                                    <img className='heart' src={filledheart} alt="Favorite" />
                                </Row>
                            ) : (
                                <Row className='heart-row'>
                                    <img className='heart' src={heart} alt="Not favorite" />
                                </Row>
                            )}
                        </a>
                        <Card.Body className='card-body'>{item.quote}</Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
}




export { FavoriteList }