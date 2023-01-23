import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'


import { BsBookHalf } from 'react-icons/bs'

const Login = () => {


    const navigate = useNavigate()

    const [error, setError] = useState(null)


    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: ''
    })

    const { username, email, password } = inputs

    const handleChange = (e) => {
        const formField = e.target.name;
        const formValue = e.target.value;

        console.log(formValue)

        setInputs(prevState => {
            return { ...prevState, [formField]: formValue }
        })
    }


    const handleSubmit = async e => {
        e.preventDefault()


        try {
            const response = await axios.post('http://localhost:8800/server/auths/register', inputs)
            console.log(response.data)


            alert('Registration Successful')
            navigate('/login')

        }
        catch (error) {
            setError(error.response.data)
        }

    }



    return (
        <div className='h-[100vh] max-w-[1640px] bg-[#dcdcdc] flex items-center justify-center'>
            <div className=" w-[550px] md:w-[750px] lg:w-[950px] h-[600px] bg-white flex rounded-[10px]  overflow-hidden m-4 " >

                <div className="flex-1 bg-white ">
                    <div className="flex flex-col p-4 justify-center h-full " >
                        <h1 className='text-5xl text-[#001000] font-semibold mb-4'>Register</h1>
                        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                            <input type="text" id='username' name='username' placeholder='Username' required value={username} onChange={handleChange} className='p-1 my-1 outline-none border-b-2' />
                            <input type="email" id='email' name='email' placeholder='abcd@gmail.com' required value={email} onChange={handleChange} className='p-1 my-1 outline-none border-b-2' />
                            <input type="text" autoComplete='off' id='password' name='password' placeholder='******' required value={password} onChange={handleChange} className='p-1 my-1 outline-none border-b-2' />
                            {error && <p className='text-red-500'>{error}</p>}
                            <button className='bg-[#001000] mt-4 p-2 rounded-[10px] font-bold text-white cursor-pointer hover:bg-[#3E7101] '>Register</button>
                        </form>

                    </div>

                </div>

                <div className="flex-1 bg-[url('https://images.pexels.com/photos/7034061/pexels-photo-7034061.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover  ">
                    <div className='bg-black/40 text-white p-6 flex flex-col justify-center  h-full '>
                        <h1 className='w-full text-3xl font-bold'><BsBookHalf size={45} className='mr-4 fill-[#203A0F]' />Eco-Lib.</h1>

                        <p className='mb-4 text-white/80 font-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores provident, sequi quibusdam, amet maiores qui eum ducimus ab veritatis magnam tenetur perspiciatis excepturi ex velit? Eius neque ex totam quae.</p>
                        <span className='text-white font-extralight'>Already have an account? <Link to="/login"><button className='text-2xl text-white border-b-2 border-b-[#3E7101] font-semibold hover:scale-[1.1]' >Login</button></Link>  </span>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Login
