import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { HeroBackground } from '../components'

const Hero = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="hero-section" id='home'>
            <HeroBackground />
        
            <div className="hero-content">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    style={{ transform: `translateY(${scrollY * 0.3}px)` }}
                >
                    Welcome to <span className="accent">Bala Teater</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                    className="tagline"
                >
                    “Kulo Balane Njenengan, Njenengan Balane Kulo, Bala Bala Bala!!!”
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="description"
                >
                    Apakah kamu siswa SMAN 1 BAWANG yang ingin bergabung dengan ekstrakurikuler tetapi belum menemukan bakat? Jangan khawatir, Bala Teater siap membantu untuk menemukan dan mengembangkan bakatmu dalam dunia teater!
                </motion.p>

                <motion.button
                    className="cta-button"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(190, 190, 190, 0.7)' }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <a href="#daftar">Daftar Sekarang!</a>
                </motion.button>
            </div>
        </section>
    );
}

export default Hero
