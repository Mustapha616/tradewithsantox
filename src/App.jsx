import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import AboutMentor from './components/AboutMentor';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Modal from './components/Modal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app">
      <Navbar onOpenModal={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <Features onOpenModal={openModal} />
        <HowItWorks onOpenModal={openModal} />
        <AboutMentor onOpenModal={openModal} />
        <FAQ onOpenModal={openModal} />
      </main>
      <Footer />
      
      {/* Interactive Form Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
