import Start from '../components/Start';
import Finish from '../components/Finish';
import Exam from '../components/Exam';
import { useState } from 'react';

const Cards = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const onNextPage = () => {
        setCurrentCardIndex(currentCardIndex + 1)
    }

    const cards = [
        {
            id: 0,
            content: <Start onNextPage={onNextPage} />
        },
        {
            id: 1,
            content: <Exam onNextPage={onNextPage} />
        },
        {
            id: 2,
            content: <Finish />
        },   
    ]

    return (
        <div className='inline-block my-6 border-2 rounded-2xl w-3/4 bg-white'>
                <div key={cards[currentCardIndex].id}>
                    {cards[currentCardIndex].content}
                </div>
        </div>
    )
}

export default Cards;