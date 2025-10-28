import React from 'react'
import Card from '../Components/Card'

const Page1 = () => {

    const users = [
        {
            user: 'kamran',
            age: 13,
            img: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?cs=srgb&dl=pexels-mikebirdy-112460.jpg&fm=jpg'
        },
        {
            user: 'sara',
            age: 14,
            img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
        },
        {
            user: 'ahmed',
            age: 15,
            img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
        },
        {
            user: 'fatima',
            age: 12,
            img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
        },
        {
            user: 'ali',
            age: 13,
            img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg'
        },
        {
            user: 'noor',
            age: 16,
            img: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg'
        },
        {
            user: 'usman',
            age: 14,
            img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
        },
        {
            user: 'ayesha',
            age: 13,
            img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
        },
        {
            user: 'zain',
            age: 15,
            img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg'
        },
        {
            user: 'hiba',
            age: 12,
            img: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg'
        },
        {
            user: 'ali',
            age: 13,
            img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg'
        },
        {
            user: 'noor',
            age: 16,
            img: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg'
        },
    ];
    return (

        <div className="flex flex-wrap justify-center p-4">
            {users.map((user, index) => (
                <Card
                    key={index}
                    name={user.user}
                    age={user.age}
                    img={user.img}
                />
            ))}
        </div>
    )
}

export default Page1