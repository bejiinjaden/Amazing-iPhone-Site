import React, { useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'


const Hero = () => {

  const [videoSrc,setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  window.addEventListener('resize', () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
})


  useGSAP(() => {
  gsap.to('#hero', {
    delay: 1.7,
    opacity: 1,
  });
  
  gsap.to('#cta', {
    opacity: 1,
    y: -80,
    delay: 1.7,
  });
}, []);

  
  return (
    <section className='w-full nav-height bg-black'>
      <div className='h-5/6 w-full flex-center flex-col'>
      
        <p id='hero' className='hero-title opacity-0'>iPhone 15 Pro</p>

         <div className='w-full flex justify-center align-center'>
        <video autoPlay playsInline ={true} muted key={videoSrc} className='w-[80%]'>
          <source src = {videoSrc} type='video/mp4'/>
        </video>
      </div>
        
      </div>

      <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
        <a href='#highlights' className='btn'>Buy</a>
        <p className='font-normal text-xl'>From $199/month or $999</p>
      </div>


     

    </section>
  )
}

export default Hero