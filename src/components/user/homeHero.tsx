import React from 'react'
import Button from '../common/button'

const HomeHero = () => {
  return (

<section
      className=" bg-no-repeat bg-center bg-contain bg-cover h-3/4 relative"
      style={{ backgroundImage: "url('/heroImage.png')"}} // Ensure the image is in public/
    >
     <div className="absolute inset-0 bg-gradient-to-r from-[#01589a7a] via-[#01589a7a]/80 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-54 flex flex-col md:flex-row items-center justify-between text-white">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Unlock Your Potential with <br className="hidden md:block" />
            Industry-Leading Courses!
          </h1>
          <p className="text-lg mb-6 max-w-lg">
            &quot;Join thousands of learners gaining real-world skills and advancing their careers.
            Our expert-led courses are designed to empower you to succeed.&quot;
          </p>
          <Button >
            Get started
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HomeHero

