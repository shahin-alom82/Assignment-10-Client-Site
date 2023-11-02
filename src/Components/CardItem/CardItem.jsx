import { useLoaderData } from "react-router-dom";
import CardItems from "../CardItems/CardItems";
import { useState } from "react";

const CardItem = () => {
    const LoadedCards = useLoaderData()
    const [cards, setCards] = useState(LoadedCards)
    console.log(cards)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10'>
                {
                    cards.map(card => <CardItems key={card._id} card={card}
                        cards={cards}
                        setCards={setCards}
                    ></CardItems>)
                }
            </div>
        </div>
    );
};

export default CardItem;