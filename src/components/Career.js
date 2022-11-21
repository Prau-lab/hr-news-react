import React, { useEffect, useState } from 'react'
import "../css/career.css"
import { Link } from "react-router-dom";

const Career = () => {
    const [newsInfo, setNewsInfo] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(15);
    const [number, setNumber] = useState(1)

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

    const formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }



    return (
        <>
            {/* Main Career News Topic Start  */}
            <div className="main-career">
                <div className="main-career-sub">
                    <div className="main-career-image">
                        <img src="../Images/career-img.jpg" alt="image not found" />
                    </div>
                    <div className="main-career-des">
                        <div className="description">
                            <p className="type-of-business">Recruitment Business</p>
                            <Link to="/Subpage"><h4 className="main-career-heading">EXPLAINER: 5 Key Takeaways From the August Jobs Report</h4></Link>
                            <p className="main-career-story">The nation’s job market last month delivered just what the Federal
                                Reserve
                                and nervous investors hoped for: A Goldilocks-style hiring
                                report.</p>
                            <div className="r-name-date">
                                <span className="r-name">Associated Press</span>
                                <span className="r-date">Sept. 2, 2022</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ads-1">
                    <p>Advertisment</p>
                </div>
            </div>
            {/* Main Career News Topic Start  */}

            {/* Latest News Career Start */}
            <div className="latest-career-section">
                <div className="latest-career-main">
                    <div className="latest-career-heading">
                        <h1 className="">The Latest Career News</h1>
                        <hr />
                        <br />
                        {
                            newsInfo && newsInfo.slice(0, 3).map((element) => {
                                return (
                                    <div className="latest-career-story my-4" key={element.urlToImage}>
                                        <div className="description-latest-career">
                                            <p className="type-of-business">Recruitment Business</p>
                                            <Link to="/Subpage"><h4 className="main-career-heading">{element.title}</h4></Link>
                                            <p className="main-career-story">{element.description ? element.description.slice(0, 600) : ""}</p>
                                            <div className="l-name-date">
                                                <span className="l-name">{!element.author ? "Jackson Micahel" : element.author}</span>
                                                <span className="l-date">{formatDate(element.publishedAt)}</span>
                                            </div>
                                        </div>
                                        <div className="latest-career-image">
                                            <img src={!element.urlToImage ? "https://s.yimg.com/ny/api/res/1.2/_cKr9uaWJ.04uMa8hV5i9w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04OTg-/https://media.zenfs.com/en/business_insider_articles_888/b5c0c80bf4972f374eb887d9178e6870" : element.urlToImage} alt="" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="recommended">
                    <div className="latest-recommended-heading">
                        <h1 className="">Recommended</h1>
                        {
                            newsInfo && newsInfo.slice(0, 4).map((element) => {
                                return (
                                    <div className="recommended-div" key={element.urlToImage}>
                                        <div className="recommended-div-child">
                                            <div className="recommended-div-child-story">
                                                <h4 className="recommended-topic">Election</h4>
                                                <p className="recommended-story">{element.title}</p>
                                            </div>
                                            <div className='recommended-div-child-image'>
                                                <img className="recommended-image" src={!element.urlToImage ? "https://s.yimg.com/ny/api/res/1.2/_cKr9uaWJ.04uMa8hV5i9w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04OTg-/https://media.zenfs.com/en/business_insider_articles_888/b5c0c80bf4972f374eb887d9178e6870" : element.urlToImage} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
            {/* Latest News Career End */}

            {/* Trending Now Start  */}
            <div className="trending-now">
                <div className="Trending-heading">
                    <h1 className="">Trending</h1>
                    <hr />
                    <br />
                </div>
                <div className="trending-new-parent">
                    {
                        newsInfo && newsInfo.slice(0, 5).map((element) => {
                            return (
                                <div className="trending-news">
                                    <p>1.</p>
                                    <h5><Link to="/Subpage">{element.title ? element.title.slice(0, 40) : ""}...</Link></h5>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* Trending Now Start  */}

            {/* Latest News Career Start */}
            <div className="latest-career-section">
                <div className="latest-career-main">
                    <div className="latest-career-second-heading">
                        <hr />
                        {
                            newsInfo && newsInfo.slice(0, 4).map((element) => {
                                return (
                                    <div className="latest-career-story my-4">
                                        <div className="description-latest-career">
                                            <p className="type-of-business">Recruitment Business</p>
                                            <Link to="/Subpage"><h4 className="main-career-heading">{element.title}</h4></Link>
                                            <p className="main-career-story">{element.description}</p>
                                            <div className="l-name-date">
                                                <span className="l-name">{!element.author ? "Ram Kumar" : element.author}</span>
                                                <span className="l-date">{formatDate(element.publishedAt)}</span>
                                            </div>
                                        </div>
                                        <div className="latest-career-image">
                                            <img src={!element.urlToImage ? "https://s.yimg.com/ny/api/res/1.2/_cKr9uaWJ.04uMa8hV5i9w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04OTg-/https://media.zenfs.com/en/business_insider_articles_888/b5c0c80bf4972f374eb887d9178e6870" : element.urlToImage} alt="" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <br />
                        <br />
                    </div>
                </div>
                <div className="ads-section">
                    <div className="ads-heading">
                        <h1 className="">Advertisment</h1>
                    </div>
                    <div className="advertisment-main-section">

                    </div>
                </div>
            </div>
            {/* Latest News Career End */}

            {/* Button Section Start */}
            <div>
                <button onClick={prev} className="button prev">Previous</button>
                <button onClick={next} className="button next">Next</button>
            </div>
            {/* Button Section End */}
        </>
    )
}

export default Career
