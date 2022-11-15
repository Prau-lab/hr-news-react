import React from 'react'
import "../css/subpage.css"
import Navbar from './Navbar'
import Footer from './Footer'

const Subpage = () => {
    return (
        <>
            <Navbar />

            {/* News Story Start  */}
            <div class="news-related-image">
                <img src="../Images/296968401_1257813401696458_4782290531480926548_n.png" alt="image not found" />
            </div>

            <div className="main-news-story-section">
                <div className="news-story-section">
                    <div className="social-media-body">
                        <div className="s-media-body f">
                            <a href="https://www.facebook.com/jobssniper2020/" target="_blank"><i
                                className="fa-brands fa-facebook-f"></i>
                            </a>
                        </div>
                        <div className="s-media-body i">
                            <a href="https://www.instagram.com/jobssniper/?hl=en" target="_blank"><i
                                className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                        <div className="s-media-body l">
                            <a href="https://www.linkedin.com/company/jobssniper/mycompany/" target="_blank"><i
                                className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </div>
                        <div className="s-media-body y">
                            <a href="https://www.youtube.com/channel/UCtPfHPU97IMzpEhUfofte4A/videos?view=0&sort=p"
                                target="_blank"><i className="fa-brands fa-youtube"></i>
                            </a>
                        </div>
                        <div className="s-media-body t">
                            <a href="https://www.tiktok.com/@jobssniper" target="_blank"><i className="fa-brands fa-tiktok"></i>
                            </a>
                        </div>
                    </div>

                    <div className="news-story">
                        <div className="sub-news-story">
                            <h6><a href="" className="news-date">1st September 2022</a></h6>
                            <h1 className="news-heading"><a href="#href">Unpaid Careers Juggling Work Commitments</a></h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                                tempora
                                consectetur velit nulla. Veritatis, nobis? Pariatur repellat iusto aliquam magnam eius
                                nesciunt, a praesentium laudantium esse neque. Quidem, impedit eligendi. Lorem ipsum dolor sit
                                amet
                                consectetur adipisicing elit. Vitae amet quia nulla eaque,
                                magni at dolorum? Aliquid repudiandae rem atque deleniti! Alias mollitia fugit culpa, enim nobis
                                nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tempora
                                consectetur velit nulla. Veritatis, nobis? Pariatur repellat iusto aliquam magnam eius
                                nesciunt, a praesentium laudantium esse neque. Quidem, impedit eligendi. Lorem ipsum dolor sit
                                amet
                                consectetur adipisicing elit. Vitae amet quia nulla eaque,
                                magni at dolorum? Aliquid repudiandae rem atque deleniti! Alias mollitia fugit culpa, enim nobis
                                nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tempora
                                consectetur velit nulla. Veritatis, nobis? Pariatur repellat iusto aliquam magnam eius
                                nesciunt, a praesentium laudantium esse neque. Quidem, impedit eligendi. Lorem ipsum dolor sit
                                amet
                                consectetur adipisicing elit. Vitae amet quia nulla eaque,
                                magni at dolorum? Aliquid repudiandae rem atque deleniti! Alias mollitia fugit culpa, enim nobis
                                nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tempora
                                consectetur velit nulla. Veritatis, nobis? Pariatur repellat iusto aliquam magnam eius
                                nesciunt, a praesentium laudantium esse neque. Quidem, impedit eligendi. Lorem ipsum dolor sit
                                amet
                                consectetur adipisicing elit. Vitae amet quia nulla eaque,
                                magni at dolorum? Aliquid repudiandae rem atque deleniti! Alias mollitia fugit culpa, enim nobis
                                nam.
                            </p>
                        </div>
                    </div>
                    <div className="ads">
                        <img src="" alt="image not found" />
                    </div>
                </div>
            </div>
            {/* News Story End */}

            <Footer />
        </>
    )
}

export default Subpage
