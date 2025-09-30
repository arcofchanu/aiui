import React from 'react';
import { ShaderAnimation } from './components/ui/shader-animation';

function App() {
  return (
    <main className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      <ShaderAnimation />
      
      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center p-4 sm:p-8">
        
        {/* Main hero content */}
        <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white" style={{ textShadow: '0 0 15px rgba(0,0,0,0.5)' }}>
                The ARC
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto" style={{ textShadow: '0 0 10px rgba(0,0,0,0.7)' }}>
                Discover a new era of digital experiences, where creativity and technology converge to build the future.
            </p>
        </div>

      </div>
    </main>
  );
}

export default App;