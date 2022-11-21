import React, { useEffect, useState } from 'react'
import "../css/newsletter.css"
import { Link } from "react-router-dom";

const Newsletter = () => {
    const [newsInfo, setNewsInfo] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(15);
    const [number, setNumber] = useState(1);

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

    const onFilter = (event) => {
        console.log(event.target.value)
    }
    return (
        <>
            {/* Filtering Section Start */}
            <div className="searching-section-main">
                <div className="searching-section">
                    <input type="text" placeholder="Search Keyword ..." className="search-keyword" />
                    <select name="" id="" className="search-option" onChange={onFilter}>
                        <option value="Publish">Publish Date</option>
                        <option value="Update Date">Update Date</option>
                        <option value=" Views">Views</option>
                        <option value="Downloads">Download</option>
                    </select>
                    <select name="" id="" className="order">
                        <option value="Descending">Descending</option>
                        <option value="Ascending">Ascending</option>
                    </select>
                    <span><button className="apply-filter">Apply Filter</button></span>
                </div>
            </div>
            {/* Filtering Section End */}

            {/* Books-list Section Start */}
            <div className="book-pdf-section">{
                newsInfo && newsInfo.slice(0, 6).map((element) => {
                    return (
                        <div>
                            <div className="img-title" key={element.urlToImage}>
                                <div className="img-book-pdf">
                                    <img src={!element.urlToImage ? "https://s.yimg.com/os/creatr-uploaded-images/2022-08/214bc7d0-2807-11ed-bbfd-041562c4885a" : element.urlToImage} alt="" />
                                </div>
                                <div className="title-book-pdf my-4">
                                    <Link to="/Books"><h4>{!element.source.name ? "Akiko Fujita" : element.source.name}</h4></Link>
                                    <Link to="/Books"><h3>{!element.author ? "Akiko Fujita" : element.author}</h3></Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            {/* Books-list Section End */}

            {/* Pagination Button Start */}

            <div className="next-button">
                <span onClick={prev}>Prev</span>
                <span>1 of 5</span>
                <span onClick={next}>Next</span>
            </div>
            {/* Pagination Button End */}
        </>
    )
}

export default Newsletter
