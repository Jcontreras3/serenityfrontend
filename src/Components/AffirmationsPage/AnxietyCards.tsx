import '../AffirmationsPage/Affirmations.css'
import { useState, useEffect, useContext } from "react";
import { Card, Row, Container } from 'react-bootstrap';
import axios from 'axios';
import DataContext from "../../Context/DataContext";
import heart from '../../Assets/heart.png';
import filledheart from '../../Assets/filled-heart.png';

  
    interface Item {
        id: number;
        quote: string;
    }

    function AnxietyList(){
        const [items, setItems] = useState<Item[]>([]);
        const [favorites, setFavorites] = useState<number[]>([]);
        
        const { updatedUserId } = useContext(DataContext);

    useEffect(() => {

        const storedFavorites = JSON.parse(
            localStorage.getItem("favoriteQuotes") || "[]"
        );
        setFavorites(storedFavorites);
    }, []);


        useEffect(() => {
            axios.get<Item[]>('https://serenitybackendsite.azurewebsites.net/Quotes/GetQuote/anxiety')
            .then(response => {
                const shuffledItems = response.data.sort(() => Math.random() - 0.5);
                setItems(shuffledItems);
                console.log(shuffledItems)
            })
            .catch(error => console.error(error));
        }, []);

        const handleFavoriteClick = (userId: number, quoteId: number, quote: string) => {
            fetch(
              `https://serenitybackendsite.azurewebsites.net/Quotes/FavoriteQuote?userId=${userId}&quoteId=${quoteId}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  quote: quote
                })
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
    
        const handleRemoveClick = (userId: number, quoteId: number) => {
            fetch(
                `https://serenitybackendsite.azurewebsites.net/Quotes/RemoveFavoriteQuote?userId=${userId}&quoteId=${quoteId}`,
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
            // Save list of favorites to local storage whenever it changes
            localStorage.setItem("favoriteQuotes", JSON.stringify(favorites));
        }, [favorites]);

        return (
            <div className='card-spacing'>
                {items.map(item => (
                  <div key={item.id}>
                    
                    <Card className='all-quotes-cards'>
                    <a
                            onClick={() =>
                                favorites.includes(item.id)
                                    ? handleRemoveClick(updatedUserId, item.id)
                                    : handleFavoriteClick(updatedUserId, item.id, item.quote)
                            }
                        >
                            {favorites.includes(item.id) ? (
                                <Row className='heart-row'>
                                <img className='heart'  src={filledheart} alt="Favorite" />
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
 



export { AnxietyList }