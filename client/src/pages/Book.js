import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import SearchBook from '../components/SearchBook'
import { IoAdd } from 'react-icons/io5'
import Pagination from '../components/Pagination'



const Book = () => {


  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(3);

  const [books, setBooks] = useState([])
  const [msg, setMsg] = useState(false)

  const [searchAPIData, setSearchApiData] = useState([])

  //get
  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:8800/server/booksapi/books')
      setBooks(response.data)
      setSearchApiData(response.data)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchBooks()

  }, [])


  //delete
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8800/server/booksapi/books/` + id)
      console.log(response)
      fetchBooks()
    }
    catch (error) {
      console.log(error)
    }
  }

  //update
  const navigate = useNavigate()
  const handleEdit = (id) => {
    navigate(`/update/${id}`)
  }

  //search

  const handleChange = (searchText) => {
    if (searchText === '') {
      setBooks(searchAPIData)
    } else {
      const filterData = searchAPIData.filter(book => book.title.toLowerCase().includes(searchText.toLowerCase()))
      if (filterData.length > 0) {
        setBooks(filterData)
      } else {
        setBooks([])
      }
    }
  }

  useEffect(() => {
    if (books.length === 0) {
      setMsg(true)
    } else {
      setMsg(false)
    }
  }, [books])

  //add
  const handleAdd = () => {
    navigate(`/addbook/`)
  }


  const indexOfLastPost = currentPage * booksPerPage;
  const indexOfFirstPost = indexOfLastPost - booksPerPage;
  const currentBooks = books.slice(indexOfFirstPost, indexOfLastPost);


  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>

      <div className='w-full h-auto flex flex-col overflow-auto scrollbar-hide'>
        <div className='flex flex-col '>
          <div className='flex flex-col items-center'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl m-4'>Welcome To Book Management</h1>


            <div className='w-full grid grid-cols-6 items-center gap-4 my-6 px-4'>
              <div className='col-start-2 col-span-4 m-auto flex gap-4'>
                <SearchBook onSearch={handleChange} /> {msg && <p className='text-center text-red-500 py-1'>No Book Found</p>}

              </div>
              <div className='hidden md:flex justify-end px-4'>
                <button className=' flex text-white bg-[#001000] py-1 px-3 rounded-xl  hover:bg-[#3E7101] cursor-pointer text-xl' onClick={handleAdd} > <IoAdd size={30} className='mr-1' /> Add </button>

              </div>
            </div>
          </div>

        </div>


        <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full p-4' >
          {currentBooks.map((book) => {
            const { id, title, description, price, cover } = book
            return (
              <article key={id} className='flex flex-col  items-center justify-between rounded-2xl p-4 mx-4 bg-[#203A0F] text-white transition-all md:hover:scale-[1.1]' >
                {cover && < img src={`../upload/${cover}`} alt="" className='w-[140px] h-[160px] object-fill' />}
                <div className='w-full h-full flex flex-col items-start  p-4 gap-2'>

                  <span className='flex gap-2 font-bold'>Title: <p className=' font-normal'> {title}</p></span>
                  <span className='flex gap-2 font-bold'>Description: <p className='font-normal' >{description}</p> </span>
                  <span className='flex gap-2 font-bold'>Price:<p className=' font-normal' >${price}</p></span>
                </div>


                <span className='flex gap-4'>

                  <button className='bg-[#001000] p-2 rounded-xl w-[100px]  hover:bg-[#3E7101]' onClick={() => handleEdit(id)} >Edit</button>
                  <button className='bg-[#001000] p-2 rounded-xl w-[100px] hover:bg-[#3E7101]' onClick={() => handleDelete(id)}>Delete</button>

                </span>
              </article>

            )
          })}


        </section>
        <div className='flex justify-end px-8'>
        <Pagination
          booksPerPage={booksPerPage}
          totalBooks={books.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>


      </div>

    </div>
  )
}

export default Book
