import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { logo } from '../assets';

const Navigation = () => {
    const [active, setActive] = useState(false);
    const [activeItem, setActiveItem] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const showNav = () => {
        setActive((prev) => !prev);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        const handleScroll = () => {
            const sections = ['home', 'about', 'gallery', 'achievements', 'daftar'];
            
            // Set scrolled state for navbar animation
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });
            
            if (current) {
                setActiveItem(current);
            }
        };

        // Initial check
        handleResize();
        
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        
        handleScroll();
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Navbar animation variants
    const navbarVariants = {
        hidden: { 
            y: -100,
            opacity: 0 
        },
        visible: { 
            y: 0,
            opacity: 1,
            transition: { 
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.5 
            }
        }
    };

    // Mobile nav menu animation variants
    const mobileMenuVariants = {
        closed: {
            x: "100%",
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        },
        open: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    // Desktop nav menu animation variants
    const desktopMenuVariants = {
        hidden: { 
            opacity: 0 
        },
        visible: { 
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    // List item animation variants
    const listItemVariants = {
        closed: { 
            y: 20, 
            opacity: 0 
        },
        open: { 
            y: 0, 
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        },
        hidden: { 
            y: -20, 
            opacity: 0 
        },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }
    };

    return (
        <motion.nav 
            className="main-nav"
            initial="hidden"
            animate="visible"
            variants={navbarVariants}
            style={{
                boxShadow: scrolled ? "0 5px 20px rgba(0, 0, 0, 0.5)" : "none",
                backdropFilter: scrolled ? "blur(10px)" : "blur(5px)",
                backgroundColor: scrolled ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.5)"
            }}
        >
            <motion.div 
                className="logo"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <img src={logo} alt="Logo" className='logo-img' />
                <span>BALA</span>
                <span className="accent">TEATER</span>
            </motion.div>

            {isMobile && <div className={`${active ? 'layer' : ''}`} onClick={showNav}></div>}
            
            {isMobile ? (
                <motion.div 
                    className={`nav ${active ? 'activeNav' : ''}`}
                    initial="closed"
                    animate={active ? "open" : "closed"}
                    variants={mobileMenuVariants}
                >
                    <motion.ul>
                        {['Home', 'About', 'Gallery', 'Achievements', 'Daftar'].map((item) => (
                            <motion.li
                                key={item}
                                variants={listItemVariants}
                                className={activeItem === item.toLowerCase() ? 'active' : ''}
                            >
                                <a href={`#${item.toLowerCase()}`} onClick={showNav}>
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
                </motion.div>
            ) : (
                <motion.div 
                    className="desktop-nav"
                    initial="hidden"
                    animate="visible"
                    variants={desktopMenuVariants}
                >
                    <motion.ul>
                        {['Home', 'About', 'Gallery', 'Achievements', 'Daftar'].map((item) => (
                            <motion.li
                                key={item}
                                variants={listItemVariants}
                                className={activeItem === item.toLowerCase() ? 'active' : ''}
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
                </motion.div>
            )}

            {isMobile && (
                <motion.label 
                    className="hamburger"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <input type="checkbox" checked={active} onChange={showNav} />
                    <svg viewBox="0 0 32 32">
                        <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                        <path className="line" d="M7 16 27 16"></path>
                    </svg>
                </motion.label>
            )}
        </motion.nav>
    );
}

export default Navigation;