import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useLocation } from 'react-router-dom'



const UpdateBook = () => {


    const navigate = useNavigate()

    const [error, setError] = useState(false)

    const [file, setFile] = useState({ })

    const [book, setBook] = useState({
        title: '',
        description: '',
        price: ''
    })


    const { title, description, price } = book


    const handleChange = (e) => {
        const formField = e.target.name;
        const formValue = e.target.value;

        setBook(prevState => {
            return { ...prevState, [formField]: formValue }

        })
    }

    const handleCoverChange = (e) => {
        setFile(e.target.files[0])

    }

    const location = useLocation()
    const bookId = location.pathname.split('/')[2];
    const handleSubmit = async e => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('cover', file)
        formData.append('price', price)

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }


        try {
            const response = await axios.put('http://localhost:8800/server/booksapi/books/' + bookId, formData, config)
            console.log(response)

            navigate('/book')

            alert('Book Updated Successfully')
        }
        catch (error) {
            setError(true)
        }

    }


    return (
        <div>
            <div className='flex flex-col items-center'>
                <h1 className=' text-3xl md:text-4xl lg:text-5xl m-8'>Edit Your Books</h1>
                <form className=' flex flex-col bg-[#203A0F] items-center p-8 rounded-2xl' onSubmit={handleSubmit}>
                    <div className='text-white mb-4  '>
                        <label htmlFor="title" className='text-xl w-[100px] md:w-[120px] mr-2 inline-block md:text-2xl' >Title</label>
                        <input className='w-[250px] md:w-[350px] lg:w-[450px] md:text-2xl text-black ' type="text" name="title" id="title" required onChange={handleChange} value={title} />
                    </div>
                    <div className='text-white mb-4 flex items-center' >
                        <label htmlFor="description" className='text-xl w-[100px] md:w-[120px] mr-2 inline-block md:text-2xl '>Description</label>
                        <textarea className='w-[250px] md:w-[350px] lg:w-[450px] md:text-2xl text-black' type="text" name="description" id="description" required onChange={handleChange} value={description} />
                    </div>

                    <div className='text-white mb-4' >
                        <label htmlFor="cover" className='text-xl w-[100px] md:w-[120px] mr-2 inline-block md:text-2xl'>Cover</label>
                        <input className='w-[250px] md:w-[350px] lg:w-[450px] md:text-2xl text-black p-1' type="file" name="cover" id="cover" onChange={handleCoverChange} />
                    </div>

                    <div className='text-white mb-4' >
                        <label htmlFor="price" className='text-xl w-[100px] md:w-[120px] mr-2 inline-block md:text-2xl '>Price ($)</label>
                        <input className='w-[250px] md:w-[350px] lg:w-[450px] md:text-2xl text-black ' type="number" name="price" id="price" required onChange={handleChange} value={price} />
                    </div>
                 

                    <button className='text-white bg-[#001000] p-2 rounded-xl w-[100px] transition-all hover:bg-[#3E7101] hover:scale-[1.1] mt-4 ' type='submit' > Edit Book </button>
                    
                    {error && <p>Something went wrong</p>}

                </form>
            </div>

        </div>

    )
}

export default UpdateBook
