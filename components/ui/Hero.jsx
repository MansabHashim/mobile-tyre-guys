import React from 'react'
import Btn from './Btn'
import LearnMore from './LearnMore'
import YouTubeEmbed from './YoutubeEmbed'
import TypEffect from './TypEffect'


const Hero = () => {

  return (          
    <div  className=' flex hero h-[70vh] my-24 md:m-0 w-full justify-center  gap- flex-col md:flex-row  items-center'>
       
       
        <div className='zoomIn md:w-[50%] md:items-start mt-12 items-center md:justify-start justify-center flex flex-col gap-5'>
            <h2 className='typehead text-secondary'>24 HOURS x 7 DAYs A WEEK
            </h2>
            <h1 className=' text-lighter text-center lg:text-[4em] md:text-start md:text-5xl'>Emergency <span>Roadside Help</span>, Towing, and Rescue</h1>
            {/* <p className='text-lg'>Always Here to Help When You Need Us Most</p> */}
            <TypEffect/>
            <p>No matter what the problem, we’re here to help.
            </p>


<div>

  
</div>



        <div className='flex gap-5 items-center'>
        <Btn />
        <LearnMore/>
        </div>

        </div>

{/* 
<div className="video-responsive m-5">
    <iframe
      width="553"
      height="380"
      src={`https://www.youtube.com/embed/${2}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      autoplay='true'
      title="Embedded youtube"
    />
  </div> */}
  {/* <div className='bg-white p- w-52'> <YouTubeEmbed/> </div> */}
  <div> 
    {/* <video src="Tire.mp4"></video> */}
  </div>

        <div className='w-[350px] '><img src="3d.gif" alt="" /></div>
    </div>
  )
}

export default Hero