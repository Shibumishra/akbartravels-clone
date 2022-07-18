import { useState, useEffect } from 'react';
import './style.css';
import { BiCurrentLocation } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import { FaCalendarAlt } from 'react-icons/fa';
import Menu from '../Menu/Menu';
import { MdFlight } from 'react-icons/md';
import { FaHotel } from 'react-icons/fa';
import { RiVisaFill } from 'react-icons/ri';
import { GiPalmTree } from 'react-icons/gi';
import { GrBus } from 'react-icons/gr';
import { GiCruiser } from 'react-icons/gi';
import { BsFillMoonFill } from 'react-icons/bs';
import { CgMoreAlt } from 'react-icons/cg';

const items = [
    {
        id: 0,
        name: 'Flight',
        icon: <MdFlight />,
    },
    {
        id: 1,
        name: 'HOtel',
        icon: <FaHotel />
    },
    {
        id: 2,
        name: 'Visa',
        icon: <RiVisaFill />
    },
    {
        id: 3,
        name: 'Holidays',
        icon: <GiPalmTree />
    },
    {
        id: 4,
        name: 'Bus',
        icon: <GrBus />
    },
    {
        id: 5,
        name: 'Cruise',
        icon: <GiCruiser />
    },
    {
        id: 6,
        name: 'Umrah',
        icon: <BsFillMoonFill />
    },
    {
        id: 7,
        name: 'More',
        icon: <CgMoreAlt />
    }]

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className='navbar-container'>
            <div className={`${isScrolled ? 'navbar-fixed' : 'navbar'}`}>
                {isScrolled ?
                    <div className='navbar_fixed'>
                        <div>
                            <div className='logo'>
                                <img src='https://dhiz4uvf5rpaq.cloudfront.net/ae/V1/assets/images/webp/home-logo.webp' alt='logo' />
                            </div>
                        </div>
                        <div>
                            <div className='menu-links'>
                                {items.map((item) => (
                                    <div className='fixed-manu-link' key={item.id} to={item.link} >
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='navbar-links-container'>
                            <a href='#' className='nav-link'>Akbar Bizz</a>
                            <a href='#' className='nav-link'>IRCTC Agent</a>
                            <a href='#' className='nav-link'>DH AED </a>
                            <a href='#' className='nav-link'>INDIA </a>
                            <a href='#' className='login-register'> Login / Register </a>
                        </div>
                    </div>
                    : <>
                        <div className='logo'>
                            <img src='https://dhiz4uvf5rpaq.cloudfront.net/ae/V1/assets/images/webp/home-logo.webp' alt='logo' />
                        </div>
                        <div className='navbar-links-container'>
                            <a href='#' className='nav-link'>Akbar Bizz</a>
                            <a href='#' className='nav-link'>IRCTC Agent</a>
                            <a href='#' className='nav-link'>DH AED </a>
                            <a href='#' className='nav-link'>INDIA </a>
                            <a href='#' className='login-register'> Login / Register </a>
                        </div>  </>
                }
            </div>

            <Menu />
            <div className='banner'>
                <div className='banner-service'>
                    <div className='banner-radio-label'>
                        <label class="form-control">
                            <input type="radio" name="radio" />
                            One Way
                        </label>
                        <label class="form-control">
                            <input type="radio" name="radio" />
                            Round Trip
                        </label>
                        <label class="form-control">
                            <input type="radio" name="radio" />
                            Multi City
                        </label>
                    </div>
                    <div>
                        <h1>Book Flight Tickets</h1>
                    </div>
                </div>

                <div className='filter-travle-container'>
                    <div className='filter-fromTo'>
                        <div className='from-name'>
                            <label>FROM</label>
                            <h6>Abu Dhabi</h6>
                            <p>[AUH] Abu Dhabi International </p>
                        </div>
                        <BiCurrentLocation className='location' />
                        <div className='from-name2'>
                            <label>TO </label>
                            <h6>Dubai</h6>
                            <p>[DXB] Dubai</p>
                        </div>
                    </div>
                    <div className='date-from'>
                        <div className='depart'>
                            <FaCalendarAlt />
                            <label>Depart</label>
                            <IoIosArrowDown />
                            <h6>18 <span>Jul’22</span></h6>
                            <p>Monday</p>
                        </div>
                        <div className='depart'>
                            <FaCalendarAlt />
                            <label>Return</label>
                            <IoIosArrowDown />
                            <h6>18 <span>Jul’22</span></h6>
                            <p>Book a round trip to save more</p>
                        </div>
                        <div className='depart'>
                            <label>Travellers & Class</label>
                            <h6>1 <span>Travellers</span></h6>
                            <p>Economy</p>
                        </div>
                        <button className='search-btn'>Search Flight</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;