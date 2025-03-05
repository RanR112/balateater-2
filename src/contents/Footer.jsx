import React from 'react'
import { pakwawan } from '../assets';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-bio">
                <h3>Singgih Wirawan (Wawan)</h3>
                <div className="coach-image">
                    <img src={pakwawan} alt="Singgih Wirawan" />
                </div>
                <br />
                <p>Halo sobat bala!!! kenalin nih, pelatih Bala Teater. Bapak Singgih Wirawan (Pak wawan) atau yang akrab dipanggil "Bapake" tinggal di Masaran, Kec. Bawang, Banjarnegara. Bapake lahir pada tanggal 2 Oktober tahun 1967. Pak wawan yang akrab dipanggil bapake telah mengajar Bala Teater sejak tahun 2015 hingga sekarang. Beliau adalah lulusan FISIP Unsoed dan juga pernah menjadi generasi pertama sekaligus pendiri Teater SiAnak FISIP Unsoed. Selain fokus untuk mengajar ilmu Teater, beliau juga selalu memotivasi terutama melalui cerita pengalaman yang telah dilalui hingga kini. Sehingga anak-anak Bala Teater tak pernah bosan untuk selalu berproses.</p>
            </div>
            
            <div className="footer-social">
                <h3>Our Social</h3>
                <div className="social-links">
                    <a href="https://instagram.com/teaterbalaa" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i> @teaterbala
                    </a>
                    <a href="https://www.youtube.com/@balateater3794" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube"></i> Bala Teater
                    </a>
                    <a href="https://wa.me/+628882401300" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp"></i> WhatsApp
                    </a>
                </div>
            </div>
            </div>
        
            <div className="footer-copyright">
                <p>© 2025 Bala Teater. All Right Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer
