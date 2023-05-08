import '../AffirmationsPage/Affirmations.css'
import { useState, useEffect } from "react";
import { Card } from 'react-bootstrap';
import axios from 'axios';


interface Item {
    id: number;
    quote: string;
}

function SelfWorthList(){
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        axios.get<Item[]>('https://serenitybackendsite.azurewebsites.net/Quotes/GetQuote/selfworth')
        .then(response => setItems(response.data))
        .catch(error => console.error(error));
    }, []);

    return (
        <div className='card-spacing'>
                {items.map(item => (
                  <div key={item.id}>
                    
                    <Card className='all-quotes-cards'>
                    <Card.Body className='card-body'>{item.quote}</Card.Body>
                    </Card>
                  </div>  
                    ))}
            </div>
    );
}  




export { SelfWorthList }