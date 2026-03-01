/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Works from './components/Works';
import About from './components/About';
import Contact from './components/Contact';
import FloatingNav from './components/FloatingNav';

export default function App() {
  return (
    <div className="min-h-screen relative selection:bg-primary selection:text-white">
      <div aria-hidden="true" className="bg-blob blob-orange"></div>
      <div aria-hidden="true" className="bg-blob blob-purple"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <Works />
        <About />
        <Contact />
      </main>
      
      <FloatingNav />
    </div>
  );
}
