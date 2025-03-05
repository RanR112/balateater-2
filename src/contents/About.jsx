import React from 'react'
import { motion } from 'framer-motion';
import { aboutImg } from '../assets';

const About = () => {
    return (
        <section id="about" className="about-section">
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
            About <span className="accent">Us</span>
            </motion.h2>
        
            <div className="about-content">
                <motion.div
                    className="about-image"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                <img src={aboutImg} alt="Bala Teater Performance" />
                <div className="image-overlay"></div>
                </motion.div>
            
                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bawang Lakon Teater atau yang biasa disingkat Bala Teater merupakan salah satu ekstrakurikuler yang mendalami bidang seni teater di SMA Negeri 1 Bawang, Banjarnegara, Jawa Tengah. Bala Teater terbagi menjadi beberapa divisi inti, seperti Penaskahan, Keaktoran, Penyutradaraan, Musik, Wardrobe, dan Makeup. Bala Teater dibimbing oleh Singgih Wirawan yang kerap dipanggil "Pak Wawan" atau "Bapake".
                    </p>
                    <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ekstrakulikuler Teater sebelumnya sudah ada sejak 2010 namun ada beberapa hal yang menyebabkan ekstrakurikuler ini sempat padam, kemudian pada tahun 2016 dibentuk kembali dengan nama Bala Teater. Pada tahun 2017, Bala Teater pertama kali mengikuti perlombaan Festival Teater Pelajar Tingkat Kabupaten Banjarnegara dan meraih Penyaji Terbaik 1 yang pada saat itu membawakan naskah drama "Dilarang Bernyanyi di Kamar Mandi".
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default About
