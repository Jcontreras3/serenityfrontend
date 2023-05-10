import '../AffirmationsPage/Affirmations.css'
import { useState, useEffect, useContext } from "react";
import { Card, Row } from 'react-bootstrap';
import axios from 'axios';
import heart from '../../Assets/heart.png';
import DataContext from "../../Context/DataContext";
import useHooks from "../../Hooks/UseHooks";

  
    interface Item {
        id: number;
        quote: string;
    }

    function ItemList(){
        const [items, setItems] = useState<Item[]>([]);

        const { updatedUserId } = useContext(DataContext);
    
        useEffect(() => {
            axios.get<Item[]>('https://serenitybackendsite.azurewebsites.net/Quotes/GetAllQuotes')
            .then(response => {
                const shuffledItems = response.data.sort(() => Math.random() - 0.5);
                setItems(shuffledItems);
            })
            .catch(error => console.error(error));
        }, []);

        const handleFavoriteClick = (userId: number, quoteId: number) => {
            fetch(`https://serenitybackendsite.azurewebsites.net/Quotes/FavoriteQuote?userId=${userId}&quoteId=${quoteId}`)
              .then(response => {
                if (!response.ok) {
                  throw new Error(response.statusText);
                }
              })
              .catch(error => console.error(error));
          };
    
        return (
            <div className='card-spacing'>
                {items.map(item => (
                    <div key={item.id}>
                        <Card className='all-quotes-cards'>
                            <Row className='heart-row'>
                            <img src={heart} className='heart' onClick={() => handleFavoriteClick(updatedUserId, item.id)} />
                            </Row>
                            <Card.Body className='card-body'>{item.quote}</Card.Body>
                            
                        </Card>
                    </div>
                ))}
            </div>
        );
    }  
 



export { ItemList }