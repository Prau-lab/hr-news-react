import React from 'react'
import socialsite from "../css/socialsite.css"

const Socialsite = () => {
    return (
        <>
            <div className="d-flex justify-content-end">
                <div className="p-2 f">
                    <a href="https://www.facebook.com/jobssniper2020/" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                </div>
                <div className="p-2 i">
                    <a href="https://www.instagram.com/jobssniper/?hl=en" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                </div>
                <div className="p-2 l">
                    <a href="https://www.linkedin.com/company/jobssniper/mycompany/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
                <div className="p-2 y">
                    <a href="https://www.youtube.com/channel/UCtPfHPU97IMzpEhUfofte4A/videos?view=0&sort=p" target="_blank"><i className="fa-brands fa-youtube"></i></a>
                </div>
                <div className="p-2 t">
                    <a href="https://www.tiktok.com/@jobssniper" target="_blank"><i className="fa-brands fa-tiktok"></i></a>
                </div>
            </div>
        </>
    ) 
}

export default Socialsite;
