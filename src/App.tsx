/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutEvolution } from './components/AboutEvolution';
import { FanEcosystem } from './components/FanEcosystem';
import { ServicesCards } from './components/ServicesCards';
import { ChannelDeepDives } from './components/ChannelDeepDives';
import { WhoWeHelp } from './components/WhoWeHelp';
import { HowItWorks } from './components/HowItWorks';
import { WhyUs } from './components/WhyUs';
import { StrategicCta } from './components/StrategicCta';
import { OpportunitySimulator } from './components/OpportunitySimulator';
import { TestimonialsPlaceholder } from './components/TestimonialsPlaceholder';
import { LeadForm } from './components/LeadForm';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('Commercial Cleaning');
  const [selectedService, setSelectedService] = useState<string>('Quero uma análise completa');

  const handleSelectIndustry = (industryName: string) => {
    setSelectedIndustry(industryName);
    const el = document.querySelector('#contato');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    const el = document.querySelector('#contato');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#090A0C] text-zinc-100 font-sans selection:bg-[#009C3B] selection:text-white">
      {/* 1. Header & Navigation */}
      <Header />

      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Quick Trust Bar */}
        <TrustBar />

        {/* 4. About & Brand Evolution (ADS4BRAZILIANS -> SALES FOR BRAZILIANS) */}
        <AboutEvolution />

        {/* 5. Central Brand Concept: Captação em Formato de Leque */}
        <FanEcosystem />

        {/* 6. The 5 Core Acquisition Channels */}
        <ServicesCards onSelectService={handleSelectService} />

        {/* 7. Channel Deep-Dives */}
        <ChannelDeepDives />

        {/* 8. Target Audience & Business Profiles */}
        <WhoWeHelp onSelectIndustry={handleSelectIndustry} />

        {/* 9. Methodology: 4 Steps */}
        <HowItWorks />

        {/* 10. Why Us (7 Core Differentiators) */}
        <WhyUs />

        {/* 11. Strategic Interstitial CTA */}
        <StrategicCta />

        {/* 12. Opportunity Ecosystem Simulator */}
        <OpportunitySimulator />

        {/* 13. Testimonials / Results (Compliant Placeholders) */}
        <TestimonialsPlaceholder />

        {/* 14. Lead Generation & Business Analysis Form */}
        <LeadForm initialIndustry={selectedIndustry} initialChannel={selectedService} />

        {/* 15. FAQ Section */}
        <Faq />
      </main>

      {/* 16. Footer with Legal Notices */}
      <Footer />

      {/* 17. Fixed Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}

