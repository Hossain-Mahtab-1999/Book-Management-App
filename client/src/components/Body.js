import React from 'react'

const Body = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4' >
      <div className='max-h-[450px] relative'> 
        <div className='absolute w-full h-full bg-black/40 flex flex-col justify-center p-4'>
           
            <h1 className='text-3xl md:text-4xl lg:text-5xl text-white'><span className='text-4xl md:text-5xl lg:text-6xl text-[#203A0F] font-bold'> The </span>World</h1>
            <h1 className='text-3xl md:text-4xl lg:text-5xl text-white'>Of<span className='text-4xl md:text-5xl lg:text-6xl text-[#203A0F] font-bold'> Eco-Lib </span></h1>
            
        </div>
        <img className='w-full h-[450px] object-fill'  src="https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=" " />
      </div>
    </div>
  )
}

export default Body
