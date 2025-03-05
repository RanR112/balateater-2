import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { logo } from '../assets';

const Navigation = () => {
    const [active, setActive] = useState(false);
    const [activeItem, setActiveItem] = useState('home');

    const showNav = () => {
        setActive((prev) => !prev);
    };

    return (
        <nav className="main-nav">
            {/* <div className={`${active ? 'layer' : ''}`}></div> */}
            <div className="logo">
                <img src={logo} alt="Logo" className='logo-img' />
                <span>BALA</span>
                <span className="accent">TEATER</span>
            </div>

            <div className={`${active ? 'layer' : ''}`} onClick={showNav}></div>
            <div className={`nav ${active ? 'activeNav' : ''}`}>
                <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                >
                    {['Home', 'About', 'Gallery', 'Achievements', 'Daftar'].map((item) => (
                        <motion.li
                            key={item}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className={activeItem === item.toLowerCase() ? 'active' : ''}
                            onClick={() => setActiveItem(item.toLowerCase())}
                        >
                            <a href={`#${item.toLowerCase()}`}>
                                {item}
                                {activeItem === item.toLowerCase() && (
                                    <motion.div
                                        className="underline"
                                        layoutId="underline"
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </a>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>

            <label className="hamburger">
                <input type="checkbox" checked={active} onChange={showNav} />
                <svg viewBox="0 0 32 32">
                    <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                    <path className="line" d="M7 16 27 16"></path>
                </svg>
            </label>
        </nav>
    );
}

export default Navigation;
