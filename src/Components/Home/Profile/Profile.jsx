import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import Typical from 'react-typical'
import "./Profile.css"

const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href="#">
                                <FacebookIcon />
                            </a>
                            <a href="#">
                                <TwitterIcon />
                            </a>
                            <a href="#">
                                <YouTubeIcon />
                            </a>
                            <a href="#">
                                <LinkedInIcon />
                            </a>
                            <a href="#">
                                <GoogleIcon />
                            </a>
                        </div>

                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            HELLO, I'M  <span className='highlighted-text'>SAJID </span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Enthusiastic Dev 😊 ",
                                        1000,
                                        "Full Stack Devloper 💻 ",
                                        1000,
                                        "React Js Developer 🌐 ",
                                        1000,
                                        "Ruby on Rails Dev 📱  ",
                                        1000
                                    ]}

                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Building Applicatins with forntend and backend.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        {" "}
                        <button className='btn1 primary-btn'>
                            Hire Me {" "}
                        </button>
                        <a href="Rails Training.pdf" download='Rails Training.pdf'>
                            <button className='btn1 highlighted-btn'>Get Resume </button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>
        </div>
    )
}

export default Profile