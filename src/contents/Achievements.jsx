import React from 'react'
import { motion } from 'framer-motion';
import AchievementData from '../global/Achievements';


const Achievements = () => {
    return (
        <section id="achievements" className="achievements-section">
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                Achievement
            </motion.h2>
        
            <div className="timeline">
            {AchievementData.map((item, index) => (
                <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                    <div className="timeline-content">
                        <div className="year">{item.year}</div>
                        <div className="title">{item.title}</div>
                    </div>
                </motion.div>
            ))}
            </div>
            <div className="script">
                <a href='https://drive.google.com/drive/folders/1VyLMpW3YZ5o6Q8RIVg9I9Uv1E5pg9yp-' target="_blank" rel="noopener noreferrer">&raquo; Naskah yang sudah pernah dibawakan &laquo;</a>
            </div>
        </section>
    );
}

export default Achievements
