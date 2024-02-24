import React from 'react'
import "./reviews.css"

const Reviews = () => {

    const reviewPeople = [
    {
        name:"João",
        city:"Lisbon",
        picture:"/images/reviewman.jpg",
        reviewtext:"I rented a car for a family trip in this website and I had an amazing experience! The booking was very easy and the staff was amazing!!"
    },
    {
        name:"Dolores",
        city:"Madeira Island",
        picture:"/images/reviewwoman.jpg",
        reviewtext:"The car was in great conditions and it was very cheap! The staff was very helpful which made my life easier when it came to planning the trip."
    },

    ]




    return (
        <>
        <div className='reviews-text' id="reviews">
            <h2 className='secondary-text'>Reviewed by the People</h2>
            <h1 className='main-text'>Client's testimonials</h1>
            <p className='paragraph-text'>
                Discover the positive impact that our company has had on our client's vacations. Our clients have experienced our unique service and results, and they can't wait to share their experience with you!
            </p>
            </div>
            <div className="review-container">
                {reviewPeople.map((person, index) => (
                    <div key={index} className='profile-container'>
                        <div className='profile'>
                            <img
                                src={person.picture}
                                alt={`profile picture of ${person.name}`}
                                className='profile-pic'
                            />
                            <div className='info'>
                                <h3 className='name'>{person.name}</h3>
                                <p className='city'>{person.city}</p>
                            </div>
                            <i className='fa-solid fa-quote-right' />
                        </div>
                        <h3 className='review-essay'>"{person.reviewtext}"</h3>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Reviews;
