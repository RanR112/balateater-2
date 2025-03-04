// App.jsx
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import SplashScreen from './SplashScreen';
import video from './contoh.mp4';
import fiqi from './masfiqi.jpg';
import pakwawan from './pakwawan.jpg';
import logo from './logo.png';

// Hero Video Background Component
const HeroBackground = () => (
  <div className="hero-video-container">
    <video autoPlay muted loop className="hero-video">
      <source src={video} type="video/mp4" />
    </video>
    {/* <div className="hero-video"></div> */}
    <div className="hero-overlay"></div>
  </div>
);

// Navigation Component with Animated Underline
const Navigation = () => {
  const [activeItem, setActiveItem] = useState('home');
  
  return (
    <nav className="main-nav">
      <div className="logo">
        <img src={logo} alt="Logo" className='logo-img' />
          <span>BALA</span>
          <span className="accent">TEATER</span>
      </div>
      
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
      >
        {['Home', 'About', 'Gallery', 'Achievements', 'Daftar'].map((item) => (
          <motion.li
            key={item}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={activeItem === item.toLowerCase() ? 'active' : ''}
            onClick={() => setActiveItem(item.toLowerCase())}
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
    </nav>
  );
};

// Hero Section with Parallax and Text Animation
const HeroSection = () => {
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
          Daftar Sekarang!
        </motion.button>
      </div>
    </section>
  );
};

// About Section with Animated Cards
const AboutSection = () => {
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
          <img src={fiqi} alt="Bala Teater Performance" />
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
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bawang Lakon Teater atau yang biasa disingkat Bala Teater merupakan salah satu ekstrakurikuler yang mendalami bidang seni teater di SMA Negeri 1 Bawang, Banjarnegara, Jawa Tengah. Bala Teater terbagi menjadi beberapa divisi inti, seperti Penaskahan, Keaktoran & Penyutradaraan, Musik, Wardrobe & Makeup. Bala Teater dibimbing oleh Singgih Wirawan yang kerap kali dipanggil "Pak Wawan" atau "Bapake".
          </p>
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ekstrakulikuler Teater sebelumnya sudah ada sejak 2010 namun ada beberapa hal yang menyebabkan ekstrakurikuler ini sempat padam, kemudian pada tahun 2016 dibentuk kembali dengan nama Bala Teater. Pada tahun 2017, Bala Teater pertama kali mengikuti perlombaan Festival Teater Pelajar Tingkat Kabupaten Banjarnegara dan meraih Penyaji Terbaik 1 yang pada saat itu membawakan naskah drama "Dilarang Bernyanyi di Kamar Mandi".
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Gallery Section with Masonry Layout
const GallerySection = () => {
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
};

// Achievements Section with Animated Timeline
const AchievementsSection = () => {
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
        {[
          { year: 2017, title: 'Festival Teater Pelajar 2017 tingkat Kabupaten Banjarnegara (Juara I)' },
          { year: 2018, title: 'FLS2N 2018 tingkat Provinsi Jawa Tengah (Juara II)' },
          { year: 2018, title: 'Artefac UNS 2019 tingkat Nasional (6 Besar)' },
          { year: 2019, title: 'Artefac UNS 2020 tingkat Nasional (Penyaji Artistik Terbaik)' },
          { year: 2020, title: 'Artefac UNS 2022 tingkat nasional (Penyaji Terbaik II)' },
          { year: 2022, title: 'Artefac UNS 2023 tingkat nasional (Penyaji Terbaik III)' },
          { year: 2023, title: 'FLS2N SMA 2023 Cabang Lomba Baca Puisi tingkat Provinsi (Juara III)' },
          { year: 2024, title: 'FLS2N SMA 2024 Cabang Lomba Monolog tingkat Kabupaten Banjarnegara (Juara I)' },
          { year: 2024, title: 'FLS2N SMA 2024 Cabang Lomba Baca Puisi tingkat Kabupaten Banjarnegara (Juara III)' },
        ].map((item, index) => (
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
        <a href=''>&raquo; Naskah yang sudah pernah dibawakan &laquo;</a>
      </div>
    </section>
  );
};

// Registration Form with Animated Inputs
const RegistrationForm = () => {
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
};

// Footer Component with Social Links
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
            <a href="https://instagram.com/teaterbala" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> @teaterbala
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i> Bala Teater
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-copyright">
        <p>© 2024 Bala Teater. All Right Reserved.</p>
      </div>
    </footer>
  );
};

// Particle Background Effect
const ParticleBackground = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = '#FFFFFF';
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Create particles
    const createParticles = () => {
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }
    };
    
    createParticles();
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return <canvas ref={canvasRef} className="particle-background" style={{ background: "radial-gradient(ellipse at bottom,rgb(17, 15, 44) 0%,rgb(0, 0, 0) 100%)" }}></canvas>;
};



// Main App Component
function App() {
  const [loading, setLoading] = useState(true);
  // Custom cursor effect
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      cursorDot.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
    };
    
    document.addEventListener('mousemove', moveCursor);
    
    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="app">
      <div className="custom-cursor" ref={cursorRef}></div>
      <div className="cursor-dot" ref={cursorDotRef}></div>

      <ParticleBackground />
      <Navigation />
      
      {loading ? (
        <SplashScreen onComplete={() => setLoading(false)} />
      ) : (
        <main>
          <HeroSection />
          <AboutSection />
          <GallerySection />
          <AchievementsSection />
          <RegistrationForm />
        </main>
      )}
      
      <Footer />
    </div>
  );
}

export default App;