import React, { useState } from "react";
import { motion } from "framer-motion";
import demangData from "../global/Kademangan";

const Kademangan = () => {
    const [showAll, setShowAll] = useState(false);

    const currentDemang = demangData.find((demang) => demang.isCurrent);
    const allDemang = demangData;

    const handleShowAllToggle = () => {
        if (showAll) {
            const kademangangSection = document.querySelector(
                ".kademangan-section"
            );
            if (kademangangSection) {
                kademangangSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }
        setShowAll(!showAll);
    };

    return (
        <section className="kademangan-section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    Kademangan <span className="accent">Bala Teater</span>
                </motion.h2>

                {!showAll ? (
                    <motion.div
                        className="current-demang"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="demang-wrapper">
                            <motion.div
                                className="demang-card current"
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="demang-image">
                                    <img
                                        src={currentDemang?.image}
                                        alt={currentDemang?.name}
                                    />
                                    <div className="image-overlay"></div>
                                </div>
                                <div className="demang-info">
                                    <h3 className="demang-name">
                                        {currentDemang?.name}
                                    </h3>
                                    <p className="demang-period">
                                        {currentDemang?.period}
                                    </p>
                                    <span className="current-badge">
                                        Demang Saat Ini
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                ) : (
                    // Tampilan semua demang (grid)
                    <motion.div
                        className="all-demang"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="demang-grid">
                            {allDemang.map((demang, index) => (
                                <motion.div
                                    key={demang.id}
                                    className={`demang-card ${
                                        demang.isCurrent ? "current" : ""
                                    }`}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow:
                                            "0 10px 20px rgba(0,0,0,0.3)",
                                    }}
                                >
                                    <div className="demang-image">
                                        <img
                                            src={demang.image}
                                            alt={demang.name}
                                        />
                                        <div className="image-overlay"></div>
                                    </div>
                                    <div className="demang-info">
                                        <h3 className="demang-name">
                                            {demang.name}
                                        </h3>
                                        <p className="demang-period">
                                            {demang.period}
                                        </p>
                                        {demang.isCurrent && (
                                            <span className="current-badge">
                                                Saat Ini
                                            </span>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                <motion.button
                    className="show-more-button"
                    onClick={handleShowAllToggle}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {showAll ? "Lebih Sedikit" : "Selengkapnya"}
                </motion.button>
            </div>
        </section>
    );
};

export default Kademangan;
