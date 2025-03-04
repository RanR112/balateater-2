import React, { useState } from 'react'
import { motion } from 'framer-motion';


const Registration = () => {
    const [formState, setFormState] = useState({
        nama: '',
        kelas: '',
        whatsapp: ''
    });
    
    const [isFocused, setIsFocused] = useState({
        nama: false,
        kelas: false,
        whatsapp: false
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };
    
    const handleFocus = (field) => {
        setIsFocused(prev => ({ ...prev, [field]: true }));
    };
    
    const handleBlur = (field) => {
        setIsFocused(prev => ({ ...prev, [field]: false }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        alert('Form submitted! We will contact you via WhatsApp');
    };
    
    return (
        <section id="daftar" className="registration-section">
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                Daftar <span className="accent">Sekarang</span>
            </motion.h2>
        
            <motion.div
                className="form-container"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <p className="form-intro">
                    Sihlakan isi form dibawah ini jika Anda berminat untuk bergabung
                </p>
            
                <form onSubmit={handleSubmit}>
                    {[
                        { name: 'nama', label: 'Nama', type: 'text' },
                        { name: 'kelas', label: 'Kelas', type: 'text' },
                        { name: 'whatsapp', label: 'No. Whatsapp', type: 'tel' }
                    ].map((field) => (
                        <motion.div
                            key={field.name}
                            className={`form-group ${isFocused[field.name] || formState[field.name] ? 'active' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <label htmlFor={field.name}>
                                {field.label}
                            </label>
                            <input
                                type={field.type}
                                id={field.name}
                                name={field.name}
                                value={formState[field.name]}
                                onChange={handleChange}
                                onFocus={() => handleFocus(field.name)}
                                onBlur={() => handleBlur(field.name)}
                                required
                            />
                            <div className="input-highlight"></div>
                        </motion.div>
                    ))}
            
                    <motion.button
                        type="submit"
                        className="submit-button"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(190, 190, 190, 0.7)' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Daftar
                    </motion.button>
            
                    <p className="form-note">
                        *Informasi selanjutnya akan dikirimkan melalui WhatsApp*
                    </p>
                </form>
            </motion.div>
        </section>
    );
}

export default Registration
