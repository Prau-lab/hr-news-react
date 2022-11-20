import React, { useEffect, useState } from 'react'
import "../css/hrstories.css"
import Socialsite from './Socialsite'
import Navbar from './Navbar'
import FirstBanner from './FirstBanner'
import Footer from './Footer'

const Hrstories = () => {
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
            <Socialsite />
            <Navbar />
            <FirstBanner />

            {/* Top Stories Section Start */}
            <div className="topstories-main">
                <div className="topstories-section">
                    <div className="topstories-image">
                        <img src={"../Images/career-img.jpg"} alt="" />
                        {/* <h3 className="topstories-heading">{newsInfo && newsInfo[13].title}</h3> */}
                        <h3 className="topstories-heading">Recruitment Business</h3>
                        <p className="topstories-para">he nation’s job market last month delivered just what the Federal
                            Reserve
                            and nervous investors hoped for: A Goldilocks-style hiring
                            report.</p>
                    </div>
                    <div className="topstoreis-list">
                        <h3 className="topstories-list-heading">Top Stories</h3>
                        <div className="topstories-listing-news">{
                            newsInfo && newsInfo.slice(0, 5).map((element) => {
                                return (
                                    <a href="" key={element.urlToImage}>
                                        <p>1. {element.title ? element.title.slice(0, 60) : ""}...</p>
                                    </a>
                                )
                            })
                        }
                        </div>

                        <div className="ads-banner">
                            ads
                        </div>
                    </div>
                </div>
            </div>
            {/* Top Stories Section End */}

            {/* HR Stories Section Start */}
            <div className="hr-stories-heading">
                <h1 className="">HR Stories</h1>
                <hr />
                <br />
            </div>
            <div className="hr-stories-main">
                {
                    newsInfo.map((element) => {
                        return (
                            <div className="hr-stories">
                                <div className="hrstories-image">
                                    <img src={!element.urlToImage ? "https://www.thestreet.com/.image/t_share/MTg5NjkxMTEwNTkzOTMxMDE3/carvana.jpg" : element.urlToImage} alt="" />
                                </div>
                                <div className="hrstories-content">
                                    <h3 className="hrstories-heading">{element.title}</h3>
                                    <p className="hr-stories-info"><span className="hrstories-dates">{!element.author ? "Alex Kritos" : element.author}</span> <span
                                        className="hrstories-dates date">{formatDate(element.publishedAt)}</span> </p>
                                    <p className="hrstories-para">{element.description ? element.description.slice(0, 500) : ""}...</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {/* HR Stories Section End */}

            {/* Recent Post Section Start */}
            <div class="recentpost-main">
                <div class="recentpost-main-line">
                    <div class="recentpost-heading">
                        <h1 class="">Recent Post</h1>
                        <hr />
                        <br />
                    </div>
                    {
                            newsInfo && newsInfo.slice(0,5).map((element) => {
                                return(
                                    <div class="recent-post-news">
                                    <div class="recentpost-image">
                                        <img src={!element.urlToImage ? "https://www.thestreet.com/.image/t_share/MTg5NjkxMTEwNTkzOTMxMDE3/carvana.jpg" : element.urlToImage} alt="" />
                                    </div>
                                    <div class="recent-post">
                                        <h3 class="recent-post-heading">{element.title}</h3>
                                        <p class="recent-post-para">{element.description ? element.description.slice(0, 600) : ""}...</p>
                                    </div>
                                </div>
                                )
                            })
                        }

                </div>
            </div>
            {/* Recent Post Section End */}

            <Footer />
        </>
    )
}

export default Hrstories
