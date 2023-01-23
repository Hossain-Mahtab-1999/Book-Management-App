import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import axios from 'axios'


import { AuthContext } from '../context/AuthContext'
const Profile = () => {



  const { currentUser } = useContext(AuthContext)

  const userID = currentUser.id

  const [file, setFile] = useState({})
  const [users, setUsers] = useState([])

  const [user, setUser] = useState({
    username: '',
    email: '',
  })

  const { username, email } = user

  const [error, setError] = useState(false)

  const [editClicked, setEditClicked] = useState(false)


  const fetchUser = async () => {

    try {

      const res = await axios.get('http://localhost:8800/server/users/user/' + userID)
      setUsers(res.data)
      console.log(res.data)
    } catch (error) {
      setError(error.response.data)
    }
  }

  const handleEdit = (id) => {
    setEditClicked(!editClicked)
  }

  const handleChange = (e) => {
    const formField = e.target.name;
    const formValue = e.target.value;

    setUser(prevState => {
      return { ...prevState, [formField]: formValue }

    })
  }


  const handleCoverChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('cover', file)
    formData.append('username', username)
    formData.append('email', email)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }

    try {
      await axios.put('http://localhost:8800/server/users/user/' + userID, formData, config)

      setUser({
        username: '',
        email: '',
      })
      
      setEditClicked(false)
      fetchUser()
      
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])



  return (
    <div className='w-full h-auto overflow-auto scrollbar-hide'>
      <section className=' w-full h-full flex flex-col items-center justify-center p-4'>

        {users.map((user) => (
          <div key={user.id}>
            <div className="flex flex-col gap-2 items-center ">
              <div className="">
                {user.cover ? <img src={`../upload/${user.cover}`} alt="" className='w-[150px] h-[150px] rounded-full object-fill' /> : <img src="https://i.pinimg.com/564x/7f/df/f3/7fdff3f87e2c67a2f368603f5921edb7.jpg" alt="" className='w-[150px] h-[150px] rounded-full object-fill' />}
              </div>
              <div className="flex flex-col items-center">
                <div className="">
                  <h2> {user.username}</h2>
                </div>
                <div className="flex items-center gap-2">
                  <AiOutlineMail />
                  <p>{user.email}</p>
                </div>
              </div>
              <div onClick={handleEdit}>
                {editClicked ? <button className='text-blue-600 shadow-lg font-bold' >Edit</button> : <button className='text-[#001000] font-semibold hover:scale-[1.1]'>Edit</button>}
              </div>

            </div>
          </div>
        ))}
      </section>
      {editClicked &&
        <div>
          <div className='flex flex-col items-center bg-[#001000] p-4 gap-2'>
            <h1 className='text-white text-3xl md:text-2xl lg:text-5xl mb-4 '>Edit Info</h1>
            <form className=' flex flex-col bg-[#203A0F] items-center p-8 rounded-2xl' onSubmit={handleSubmit}>

              <div className='text-white mb-4 flex items-center' >
                <label htmlFor="email" className='text-xl w-[100px] md:w-[120px] mr-2 inline-block md:text-2xl '>Email</label>
                <input className='w-[250px] md:w-[350px] lg:w-[450px] md:text-2xl text-black' type="text" name="email" id="email" onChange={handleChange} value={email} />
              </div>

              <div className='text-white mb-4' >
                <label htmlFor="cover" className='text-xl w-[100px] md:w-[120px] mr-2 inline-block md:text-2xl'>Cover</label>
                <input className='w-[250px] md:w-[350px] lg:w-[450px] md:text-2xl text-white p-1' type="file" name="cover" id="cover" onChange={handleCoverChange} />
              </div>


              <button className='text-white bg-[#001000] p-2 rounded-xl w-[100px] transition-all hover:bg-[#3E7101] hover:scale-[1.1] mt-4 ' type='submit' > Edit Info </button>

              {error && <p>Something went wrong</p>}

            </form>
          </div>

        </div>
      }
      {error && <p>{error}</p>}

    </div>

  )
}

export default Profile
