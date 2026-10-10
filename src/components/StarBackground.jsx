import React, { useState, useRef, Suspense } from "react";

const StarBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#030014]">
      {/* Simple animated CSS stars could go here. Let's just create a nice gradient with some floating orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] mix-blend-screen"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px] mix-blend-screen"></div>
      
      {/* Static stars */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
    </div>
  );
};

export default StarBackground;
