import React from 'react'
import { motion } from 'framer-motion';
import GalleryData from '../../global/Gallery';


const Gallery = () => {
    return (
        <section id="gallery" className="gallery-section">
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                Gallery
            </motion.h2>
        
            <div className="gallery-container">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <motion.div
                        key={item}
                        className="gallery-item"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: item * 0.1 }}
                        whileHover={{ scale: 1.02, boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}
                    >
                        <img src={`/images/gallery-${item}.jpg`} alt={`Gallery ${item}`} />
                        <div className="gallery-overlay">
                            <span>View</span>
                        </div>
                </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Gallery
