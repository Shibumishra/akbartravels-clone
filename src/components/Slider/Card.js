import React from 'react';

const Card = ({pic, name, fee, title}) => {

    return (
        <div className='sliderouter blog-post'>
            <div className='card-cont'>
                <div className='card-item'>
                    <div className='main-card'>
                        <div className='min-card'>
                            <img className='img' src={pic} />
                        </div>
                        <div className='ngcontent-container'>
                            <div className='ngcontent'>
                                <div className='content'>
                                    <p>{name}</p>
                                </div>
                            </div>
                            <div className='ngcontent-text'>
                                <div className='ngcontent-text-cont'>
                                    <h3>{fee}</h3>
                                    <p>{title}</p>
                                </div>
                            </div>
                            <div className='book-now'>
                                <a>Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;