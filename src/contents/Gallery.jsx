import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GalleryData from '../global/Gallery';

const Gallery = () => {
    const [showAll, setShowAll] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const visiblePhotos = showAll ? GalleryData : GalleryData.slice(0, 5);

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
                {visiblePhotos.map((data, index) => (
                    <motion.div
                        key={data.id}
                        className="gallery-item"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}
                    >
                        <img src={data.img} alt={data.alt} />
                        <div className="gallery-overlay" onClick={() => setSelectedImage(data.img)}>
                            <span>View</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {!showAll && GalleryData.length > 5 && (
                <button className="show-more-button" onClick={() => setShowAll(true)}>
                    Selengkapnya
                </button>
            )}
            {showAll && GalleryData.length > 5 && (
                <a href='#gallery'>
                    <button className="show-more-button" onClick={() => setShowAll(false)}>
                        Lebih Sedikit
                    </button>
                </a>
            )}

            {selectedImage && (
                <div className="fullscreen-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="fullscreen-content">
                        <button className="close-button" onClick={() => setSelectedImage(null)}>&times;</button>
                        <img src={selectedImage} alt="Selected" className="fullscreen-image" />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
