import React from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {

const navigate = useNavigate()
const handleRegister = async(e) => {
  e.preventDefault()
  //Here datas are posted to the routed Db...
  fetch('https://raceauto-be.onrender.com/users/register',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      username:document.getElementById('username').value,
      email:document.getElementById('email').value,
      password:document.getElementById('password').value
    })
  }).then(res=>res.json())
  //Here we are trying to direct the user to his datas...(navigating..)
  .then(data => {(data._id)
  navigate("/todolistmain/"+data._id)
  })}
  return (
    <div id="app" className="min-w-[400px] w-1/2 mx-auto mt-40">
    <div className="max-w-4xl bg-gray-500 p-4 rounded-lg shadow-lg hover:bg-gray-800">
      <div className="w-full max-w-xs mx-auto mt-8 bg-cover bg-center">
        <form onSubmit={handleRegister} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              minLength="6"
              required
            />
            <p className="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
          <p className="text-xs mt-4">
            Already have an Account? <a href="/login">Go to Login Page</a>
          </p>
        </form>
        <p className="text-center text-gray-500 text-xs">&copy;2024 Aswin. All rights reserved.</p>
      </div>
    </div>
  </div>
  
  )
}

export default Register