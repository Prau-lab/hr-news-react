import React, { useEffect, useState } from 'react';
import "../css/carousel.css"
import Slider from './Slider';

const Carousel = () => {
    const [newsInfo, setNewsInfo] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(15);


    const news = async () => {
        try {
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=13eefc102aa945558712db27c76f8c7d&page=1&pageSize=${pageSize}`
            const res = await fetch(url);
            const link = await res.json();
            setNewsInfo(link.articles);

        } catch (error) {

        }
    }
    useEffect(() => {
        news();
    }, [])

    const prev = async () => {
        try {
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=13eefc102aa945558712db27c76f8c7d&page=${page - 1}&pageSize=${pageSize}`
            const res = await fetch(url);
            const link = await res.json();
            setNewsInfo(link.articles);

        } catch (error) {

        }
    }

    const next = async () => {
        try {
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=13eefc102aa945558712db27c76f8c7d&page=${page + 1}&pageSize=${pageSize}`
            const res = await fetch(url);
            const link = await res.json();
            setNewsInfo(link.articles);

        } catch (error) {

        }
    }
    return (
        <>

            {/* Banner Section Start */}
            <div className="second-banner my-4 d-flex justify-content-center">
                <img src="../Images/1230x1001.jpg" alt="image not found" />
            </div>
            {/* Banner Section End */}
            
            {/* Slider Section Start */}
            <Slider newsInfo={newsInfo} />
            {/* Slider Section End */}

            {/* News Section Start */}
            <div className='news-section-header'>
                <h1 className="">Today's News</h1>
                <hr />
                <br />
            </div>
            <div className="samachar">
                <div className="news-parent" id="news_parent">
                    {
                        newsInfo.map((element) => {
                            return (
                                <div className="news-section" key={element.urlToImage}>
                                    <img src={!element.urlToImage ? "https://cdn.vox-cdn.com/thumbor/Xx-5LI83bB-z6NSmy1A0gKMhf9s=/0x0:1020x676/1200x628/filters:focal(510x338:511x339)/cdn.vox-cdn.com/uploads/chorus_asset/file/24196839/facebookthumbsdong.jpg" : element.urlToImage} alt="image not found" />
                                    <div className="heading-date">
                                        <h4><a href="#">{element.title}</a></h4>
                                        <p><i className="far fa-clock">&nbsp;&nbsp;</i>{element.publishedAt}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="third-banner col-4">
                    <div className="adfirst">
                        <a href=""></a>
                    </div>
                    <div className="adsecond">
                        <a href=""></a>
                    </div>
                    <div className="adthird">
                        <a href=""></a>
                    </div>
                </div>
            </div>
            {/* News Section End */}

            {/* Button Section Start */}
            <div>
                <button onClick={prev} className="button prev">Previous</button>
                <button onClick={next} className="button next">Next</button>
            </div>
            {/* Button Section End */}

            {/* Hottest News Section Start */}
            <div className="news-section-header">
                <h1 className="">Hottest News of This Week
                </h1>
                <hr />
                <br />
            </div>

            <div className="hottest-news">
                {
                    newsInfo && newsInfo.slice(0, 6).map((element) => {
                        return (
                            <div className="hottest-news-div" key={element.urlToImage}>
                                <a href="#"><img src={!element.urlToImage ? "https://cdn.vox-cdn.com/thumbor/Xx-5LI83bB-z6NSmy1A0gKMhf9s=/0x0:1020x676/1200x628/filters:focal(510x338:511x339)/cdn.vox-cdn.com/uploads/chorus_asset/file/24196839/facebookthumbsdong.jpg" : element.urlToImage} alt="" className="hottest-news-image" /></a>
                                <div className="hottest-news-topic">
                                    <h4 className="hottest-news-heading"><a href="">{element.title}</a>
                                    </h4>
                                    <div className="hottest-news-subdiv">
                                        <img src="../Images/reporter.jpg" alt="image not found" className="hottest-news-reporter" /><span
                                            className="hottest-news-name">Nautica venchi</span>
                                        <i className="fa fa-calendar hottest-news-calender" aria-hidden="true"></i> <span
                                            className="hottest-news-date">{element.publishedAt}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {/* Hottest News Section End */}

            {/* Banner Placement Start */}
            <div className="body-banner d-flex justify-content-center">
                <img src="../Images/MicrosoftTeams-image-32.png" alt="" />
            </div>
            {/* Banner Placement End */}

            {/* Featured News Start */}
            <div className="news-section-header">
                <h1 className="">Featured News
                </h1>
                <hr />
                <br />
            </div>

            <div className="featured-news-main">
                {
                    newsInfo && newsInfo.slice(0, 3).map((element) => {
                        return (
                            <div className="featured-new">
                                <div className="featured-news-bgimg">
                                    <img src={!element.urlToImage ? "https://cdn.vox-cdn.com/thumbor/Xx-5LI83bB-z6NSmy1A0gKMhf9s=/0x0:1020x676/1200x628/filters:focal(510x338:511x339)/cdn.vox-cdn.com/uploads/chorus_asset/file/24196839/facebookthumbsdong.jpg" : element.urlToImage} alt="" />
                                </div>
                                <div className="featured-news-image">
                                    <img src={!element.urlToImage ? "https://cdn.vox-cdn.com/thumbor/Xx-5LI83bB-z6NSmy1A0gKMhf9s=/0x0:1020x676/1200x628/filters:focal(510x338:511x339)/cdn.vox-cdn.com/uploads/chorus_asset/file/24196839/facebookthumbsdong.jpg" : element.urlToImage} alt="" />
                                </div>
                                <div className="featured-news-information">
                                    <a href="../html/sub-page.html"><h4 className="featured-person">{!element.author ? "unknown" : element.author}</h4></a>
                                    <a href="../html/sub-page.html"><h2 className="featured-news-info">Featured News related with Ram Krishna Dhakal</h2></a>
                                    <a href="../html/sub-page.html"><p className="featured-news-designation">Front-end Engineer, ABC Company</p></a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {/* Featured News End */}
        </>
    )
}

export default Carousel;
