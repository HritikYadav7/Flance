import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)

    const {pathname} = useLocation()

    const isOpen = () => {
        setOpen(!open)
    }

    const isActive = () => {
        let a = 0;
        if(window.screenY = 0) a=1;
        a > 0 ? setActive(true) : setActive(false);
        console.log(window.screenY);
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive);
        return () => {
          window.removeEventListener("scroll", isActive);
        };
      }, []);

    const currentUser = JSON.parse(localStorage.getItem("currentUser"))

  return (
    <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
                <Link to="/" className='link'>
                <span className='text'>f<span className='dot'>.</span>lance</span>
                </Link>
            </div>
            <div className="links">
                <span>F.lance Business</span>
                <span>Explore</span>
                <span>Sign In</span>
                <span>English</span>
                {!currentUser?.isSeller &&<span>Become a Seller</span>}
                {!currentUser && <button className='button'>Join</button>}
                {currentUser && (
                    <div className='user' onClick={isOpen}>
                        {/* <img src={logo} /> */}
                        <img src={currentUser.img || "./img/noavatar.jpg"} alt="" />
                        {/* <img src="./img/oip.jpg" alt="" /> */}
                        <span>{currentUser?.username}</span>
                        {open && (<div className="options">
                            {
                                currentUser?.isSeller && (
                                    <>
                                        <Link className='link' to="/mygigs" >Gigs</Link>
                                        <Link className='link' to="/add" >Add New Gig</Link>
                                    </>
                                )
                            }
                            <Link className='link' to="/orders" >Orders</Link>
                            <Link className='link' to="/messages" >Messages</Link>
                            <Link className='link' to="/" >Logout</Link>
                        </div>
                        )}
                    </div>
                )}
            </div>
        </div>
            {(active || pathname !=="/") && (
                <>
                    <hr/>
                    <div className="menu">
                        <Link className='link' to="/">
                            Graphics & Design
                        </Link>
                        <Link className='link' to="/">
                            Video & Animation
                        </Link>
                        <Link className='link' to="/">
                            Writing & Translation
                        </Link>
                        <Link className='link' to="/">
                            AI Services
                        </Link>
                        <Link className='link' to="/">
                            Digital Marketing
                        </Link>
                        <Link className='link' to="/">
                            Music & Audio
                        </Link>
                        <Link className='link' to="/">
                            Programming & Tech
                        </Link>
                        <Link className='link' to="/">
                            Business
                        </Link>
                        <Link className='link' to="/">
                            Lifestyle
                        </Link>
                    </div>
                </>
            )}
            <hr />
    </div>
  )
}

export default Navbar