import React from 'react'
import TopBooks from './TopBooks.json'

import Carousel from 'react-elastic-carousel'


const TopBookCard = () => {

  return (
    <div className='w-full h-auto '>
       <h1 className='font-bold p-4 text-[#203A0F] text-2xl md:text-3xl'>Current Bestsellers</h1>

        <Carousel itemsToShow={3}  itemsToScroll={1} pagination={true}  >
            { TopBooks.map((TopBooks) => {
              const {id, title, price, cover} = TopBooks
                return (
                  <article key={id} className='w-[400px] h-auto gap-2 flex flex-col items-start bg-[#203A0F] text-white border-8 border-white ' >
                      {cover && < img src={cover} alt= "" className='w-full h-[240px]'/> }
                      <p className='my-1 px-1'> <span className='font-semibold'>Title:</span> {title}</p>
                      <p className='my-1 px-1 text-orange-400'> <span className='font-semibold'>Price: </span>${price}</p>
    
                  </article>     
              )
            })}
        {/* </section> */}
        </Carousel>
    </div>
  )
}

export default TopBookCard
