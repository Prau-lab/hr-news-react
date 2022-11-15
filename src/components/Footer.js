import React from 'react'
import "../css/footer.css"

const Footer = () => {
    return (
        <>
            <div className="footer-main">
                <div className="footer">
                    <div className="social-media-footer">
                        <div className="s-media f">
                            <a href="https://www.facebook.com/jobssniper2020/" target="_blank"><i
                                className="fa-brands fa-facebook-f"></i>
                            </a>
                        </div>
                        <div className="s-media i">
                            <a href="https://www.instagram.com/jobssniper/?hl=en" target="_blank"><i
                                className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                        <div className="s-media l">
                            <a href="https://www.linkedin.com/company/jobssniper/mycompany/" target="_blank"><i
                                className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </div>
                        <div className="s-media y">
                            <a href="https://www.youtube.com/channel/UCtPfHPU97IMzpEhUfofte4A/videos?view=0&sort=p"
                                target="_blank"><i className="fa-brands fa-youtube"></i>
                            </a>
                        </div>
                        <div className="s-media t">
                            <a href="https://www.tiktok.com/@jobssniper" target="_blank"><i className="fa-brands fa-tiktok"></i>
                            </a>
                        </div>
                    </div>
                    <ul className="footer-menu">
                        <li><a href="#HR">HR News Nepal &nbsp;|</a></li>
                        <li><a href="#HR Events">HR Events &nbsp;|</a></li>
                        <li><a href="#HR Stories">HR Stories &nbsp;|</a></li>
                        <li><a href="#Appointed">Appointed &nbsp;|</a></li>
                        <li><a href="#Appointed">Newsletter &nbsp;|</a></li>
                        <li><a href="#Career">Career &nbsp;|</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer
