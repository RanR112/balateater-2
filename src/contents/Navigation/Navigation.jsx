import React, { useState } from 'react'
import { motion } from 'framer-motion';
import logo from './logo.png';

const Navigation = () => {
    const [activeItem, setActiveItem] = useState('home');

    return (
        <nav className="main-nav">
            <div className="logo">
                <img src={logo} alt="Logo" className='logo-img' />
                <span>BALA</span>
                <span className="accent">TEATER</span>
            </div>
        
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
        </nav>
    );
}

export default Navigation
