import React, { useEffect, useState } from 'react'
import "../css/hrevents.css"
import Socialsite from './Socialsite'
import Navbar from './Navbar'
import FirstBanner from './FirstBanner'
import Footer from './Footer'




const Hrevents = () => {
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
            {/* Top HR Events in 2022 Start */}
            <div className="top-hr-events">
                <div className="backgroundimg">
                    <img src="../Images/wave.svg" alt="" />
                </div>
                <div className="calender-text">
                    <div className="text-top-hr">
                        <h2>The Top HR Conferences in 2022</h2>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                    </div>
                    <div className="calender">
                        <img src="../Images/Calender.png" alt="" />
                    </div>
                </div>
            </div>
            {/* Top HR Events in 2022 End */}

            {/* Month Related Events Start */}
            <div className="months-heading">
                <h1 className="">January Related Events</h1>
                <hr />
                <br />
            </div>
            <div className="month-related-events-section">
                {
                    newsInfo.map((element) => {
                        return (
                            <div className="month-realated-events">
                                <div className="month-realated-event-heading">
                                    <h1>Hello Welcome To Our Event</h1>
                                </div>
                                <div className="month-related-event-information">
                                    <div className="info-events">
                                        <span><i className="fa-light fa-calendar"></i></span> <span>{formatDate(element.publishedAt)}</span>
                                        <span><i className="fa-light fa-calendar-days"></i></span> <span>{element.title ? element.title.slice(0, 40) : ""}</span>
                                        <span><i className="fa-light fa-calendar-days"></i></span> <span>info@gmail.com</span>
                                    </div>

                                    <p className="host-event"> <span className="bold">Host:</span> HR Strategy Forum</p>
                                    <p className="event-attend"> <span className="bold">Who Should Attend:</span> HR Professionals who are seeking to expand their
                                        knowledge and connections.</p>
                                    <p className="whats-covered"> <span className="bold">What's Covered:</span> {element.content ? element.content.slice(0, 1000) : ""}</p>
                                    <p className="dining"> <span className="bold">Dining:</span> TBA</p>
                                    <p className="learn-more"> Learn More</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {/* Month Related Events End */}

            {/* HR Event List 2023 Section Start */}
            <div className="hrevent-list-main">
                <div className="events">
                    <div className="event-heading">
                        <h1 className="hrevent-heading">HR Events List 2023</h1>
                        <p>For a list of HR events by month, click below.</p>
                    </div>
                </div>
                <div className="hrevents-months">
                    <div className="months">January</div>
                    <div className="months">February</div>
                    <div className="months">March</div>
                    <div className="months">April</div>
                    <div className="months">May</div>
                    <div className="months">June</div>
                    <div className="months">July</div>
                    <div className="months">August</div>
                    <div className="months">September</div>
                    <div className="months">October</div>
                    <div className="months">November</div>
                    <div className="months">December</div>
                </div>
            </div>
            {/* HR Event List 2023 Section End */}
            <Footer />
        </>
    )
}

export default Hrevents
