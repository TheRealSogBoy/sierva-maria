import React, { useState } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { LogoGeneratorSection } from './components/LogoGeneratorSection';
import { ColorPaletteSection } from './components/ColorPaletteSection';
import { TypographySection } from './components/TypographySection';
import { ToneOfVoiceSection } from './components/ToneOfVoiceSection';
import { InclusivitySection } from './components/InclusivitySection';
import { BrandArchitectureSection } from './components/BrandArchitectureSection';
import { ContentPillarsSection } from './components/ContentPillarsSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

export default function App() {
  const [activeSection, setActiveSection] = useState('adn');
  const [currentTheme, setCurrentTheme] = useState('sierva'); // 'sierva' | 'aurea'
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  const hideToast = () => {
    setToastMessage('');
  };

  const isAurea = currentTheme === 'aurea';

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isAurea ? 'bg-[#FDF6EE] text-[#0D0D1E]' : 'bg-[#FDF6EE] text-[#1A1A2E]'
    }`}>
      
      {/* Sticky Luxury Editorial Navigation */}
      <HeaderNav 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
      />

      {/* Main Dashboard Sections */}
      <main>
        {/* 01. Hero & Narrative Origin */}
        <HeroSection currentTheme={currentTheme} />

        {/* 02. Logo System & Canvas PNG Generator */}
        <LogoGeneratorSection showToast={showToast} />

        {/* 03. Interactive Color Swatches */}
        <ColorPaletteSection showToast={showToast} />

        {/* 04. Typography Hierarchy & Interactive Sampler */}
        <TypographySection />

        {/* 05. Tone of Voice Comparison Cards */}
        <ToneOfVoiceSection />

        {/* 06. Inclusivity Principles */}
        <InclusivitySection showToast={showToast} />

        {/* 07. Dual Architecture: Sierva Maria vs Aurea */}
        <BrandArchitectureSection 
          currentTheme={currentTheme} 
          setCurrentTheme={setCurrentTheme} 
        />

        {/* 08. Content Pillars & Commercial Onboarding */}
        <ContentPillarsSection />
      </main>

      {/* Footer */}
      <Footer currentTheme={currentTheme} />

      {/* Toast Feedback Notification */}
      <Toast message={toastMessage} onClose={hideToast} />

    </div>
  );
}
