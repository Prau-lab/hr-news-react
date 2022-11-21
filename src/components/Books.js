import React, { useEffect, useState } from 'react'
import "../css/books.css"
import Socialsite from './Socialsite'
import Navbar from './Navbar'
import FirstBanner from './FirstBanner'
import Footer from './Footer'

const Books = () => {
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
  return (
    <>
      <Socialsite />
      <Navbar />
      <FirstBanner />
     {/* Main Container Start */}
    <div className="books-main-container">
        <div className="book-heading">
            <div>
                <h1>Harry Porter</h1>
                <h3>J.K. Rowling</h3>
            </div>
        </div>
        <div className="form-book">
            <div className="form">
                <p>Name</p> <br />
                <input type="text" className="text" />
                <p>Email</p> <br />
                <input type="email" className="email" />
                <p>Phone</p> <br />
                <input type="number" className="number" /><br />
                <input type="checkbox" className="check" /><p className="agree">I agree to HR News Privacy Policy & Terms of Use.</p><br />
                <button className="download">Download Now</button>
            </div>
            <div className="book-content">
                <p>
                    In times when Data is increasing, the need to analyse this data to derive meaningful inferences has
                    become very important. That’s exactly why Data Science & Analytics is growing as a highly in-demand
                    job profile. Forbes called it the “Sexiest Job of the 21st Century”. And according to the Hindu
                    Business Line, a total of 97000 job vacancies remain open in this field.
                    

                    Learning Data Science can be complex and overwhelming. Multiple programming languages, different
                    pathways to learning the science and complex job profiles make it difficult for a beginner to start
                    the journey to Data Science mastery.

                    To make it all simple and give you a headstart, we have created an e-book on “The Journey of a Data
                    Scientist.” It talks about the best way to Master Data Science & Analytics and broadly speaks about
                    other dimensions of the industry such as skills required, job profiles, salaries offered, career
                    path and the industry overview.

                    It is a perfect place to get an estimate on where and how to get started with learning Data Science.

                    This e-book covers the following topics:

                    What is Data Science
                    Growth of Data Science Industry
                    Roles, Job Prospects, and Salaries in Data Science
                    Difference between Data Science, Machine Learning, Deep Learning & Artificial Intelligence
                    Skills Required for Critical Job Functions
                    Why Should You Learn Data Science?

                    <img src="../Images/books1.jpeg" alt="" className="books" />
                </p>
            </div>
        </div>
    </div>
    {/* Main Container End */}
      <Footer />
    </>
  )
}

export default Books
