import {React, useState, useEffect } from 'react'


const Search = (props) => {

  const [searchText, setSearchText] = useState("")

  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

  useEffect(() => {
    props.onSearch(searchText)

  }, [searchText, props])
  

  return (
    <div>
      <input type="text" placeholder="Search your book here...." value={searchText} onChange={handleChange} className='w-[200px] md:w-[300px] lg:w-[400px] outline outline-[#203A0F] placeholder-neutral-800 p-1 ' />
    </div>
  )
}

export default Search
