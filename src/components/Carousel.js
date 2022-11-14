import React, { useEffect, useState } from 'react';

const Carousel = () => {
    const [newsInfo, setNewsInfo] = useState([]);

    const news = async () => {
        try {
            let url = `https://newsdata.io/api/1/news?apikey=pub_13411b8ec7c1b86190bdaa3eb7c0670c2e071&q=news `
            const res = await fetch(url);
            setNewsInfo(await res.json());
        } catch (error) {

        }
    }
    useEffect(() => {
        news();
    }, [])

    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                {
                    newsInfo.map((element) => {
                        return (
                            <div className="carousel-inner" key={element.image_url}>
                                <div className="carousel-item" >
                                    <img src={element.image_url} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>{element.title}</h5>
                                        <p>{element.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </>
    )
}

export default Carousel
