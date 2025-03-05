import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RegistrationForm = () => {
    const [formState, setFormState] = useState({
        Nama: '',
        Kelas: '',
        Nomor: ''
    });
    const formRef = useRef(null);
    
    const [submissionStatus, setSubmissionStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const [isFocused, setIsFocused] = useState({
        Nama: false,
        Kelas: false,
        Nomor: false
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

    const [duplicateCheckData, setDuplicateCheckData] = useState(null);

    const checkSubmit = async (formData) => {
        try {
            const response = await fetch(formRef.current.action + '?type=check', {
                method: 'POST',
                body: formData,
            });
            const result = await response.json();

            if (result.result === 'not_found') {
                submitData(formData);
            } else if (result.result === 'found') {
                // Simpan data yang terdeteksi duplikat
                setDuplicateCheckData({
                    Nama: formState.Nama,
                    Kelas: formState.Kelas,
                    Nomor: formState.Nomor
                });
                setSubmissionStatus('duplicate');
                setIsSubmitting(false);
            }
        } catch (error) {
            setSubmissionStatus('error');
            setIsSubmitting(false);
        }
    }

    // Modifikasi method handleUpdateConfirmation
    const handleUpdateConfirmation = (confirmed) => {
        if (confirmed) {
            // Jika user memilih Ya (update)
            setIsSubmitting(true);
            const formData = new FormData(formRef.current);
            submitData(formData, true);
        } else {
            // Jika user memilih Tidak
            setSubmissionStatus('rejected');
            setIsSubmitting(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Reset duplicateCheckData sebelum melakukan pengecekan baru
        setDuplicateCheckData(null);
        
        const formData = new FormData(formRef.current);
        
        await checkSubmit(formData);
    };

    const submitData = async (formData, isUpdate = false) => {
        try {
            const response = await fetch(formRef.current.action + (isUpdate ? '?type=update' : ''), {
                method: 'POST',
                body: formData,
            });
            const result = await response.json();

            if (result.result === 'success' || result.result === 'update') {
                setSubmissionStatus('success');
                // Reset duplicateCheckData setelah berhasil submit
                setDuplicateCheckData(null);
                resetForm();
            } else {
                setSubmissionStatus('error');
            }
        } catch (error) {
            setSubmissionStatus('error')
        } finally {
            setIsSubmitting(false);
        }
    };
    
    const resetForm = () => {
        setFormState({
            Nama: '',
            Kelas: '',
            Nomor: ''
        });
        formRef.current.reset();
    };
    
    const isFormValid = formState.Nama && formState.Kelas && formState.Nomor;

    // Perbarui status variants
    const statusVariants = {
        success: {
            message: "Pendaftaran Berhasil!",
            style: "status-success"
        },
        duplicate: {
            message: "Kamu sudah terdaftar. Ingin merubah data dengan yang baru?",
            style: "status-duplicate"
        },
        rejected: {
            message: "Pendaftaran dibatalkan.",
            style: "status-rejected"
        },
        error: {
            message: "Terjadi kesalahan. Silakan coba lagi.",
            style: "status-error"
        }
    };

    useEffect(() => {
        const form = formRef.current;
        form.addEventListener("submit", handleSubmit);

        return () => {
            form.removeEventListener("submit", handleSubmit);
        };
    }, []);

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
                    Silahkan isi form dibawah ini jika kamu berminat untuk bergabung
                </p>
                
                <form ref={formRef} method='POST' action='https://script.google.com/macros/s/AKfycbwCUjg6us65iJwtGIBRZxgzZ9rqNUmFHSWsPCzl3J1SE31xeRGcoS9p4vxTO9uFMjpi/exec'>
                    {[
                        { name: 'Nama', label: 'Nama', type: 'text'},
                        { name: 'Kelas', label: 'Kelas', type: 'text'},
                        { name: 'Nomor', label: 'No. Whatsapp', type: 'text'}
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
                        disabled={!isFormValid || isSubmitting}
                        whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(181, 181, 181, 0.7)' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isSubmitting ? 'Mengirim...' : 'Daftar'}
                    </motion.button>
                    
                    <AnimatePresence>
                        {submissionStatus === "duplicate" && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="status-message duplicate"
                            >
                                <p className="message-text">{statusVariants["duplicate"].message}</p>
                                <div className="button-container">
                                    <button onClick={() => handleUpdateConfirmation(true)} className="btn btn-yes">
                                        Ya
                                    </button>
                                    <button onClick={() => handleUpdateConfirmation(false)} className="btn btn-no">
                                        Tidak
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {submissionStatus && submissionStatus !== "duplicate" && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className={`status-message ${submissionStatus}`}
                            >
                                {statusVariants[submissionStatus].message}
                            </motion.div>
                        )}
                    </AnimatePresence>
                    
                    <p className="form-note">
                        *Informasi selanjutnya akan dikirimkan melalui WhatsApp*
                    </p>
                </form>
            </motion.div>
        </section>
    );
};

export default RegistrationForm;