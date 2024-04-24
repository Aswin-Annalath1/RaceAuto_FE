import React from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {

const navigate = useNavigate()
const handleRegister = async(e) => {
  e.preventDefault()
  //Here datas are posted to the routed Db...
  fetch('https://raceauto-be.onrender.com/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data._id) {
          // Registration successful, send verification email
          fetch('https://raceauto-be.onrender.com/users/send-verification-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: data._id, email }),
          })
            .then((res) => res.json())
            .then((verificationData) => {
              if (verificationData.success) {
                // Email sent successfully, navigate to success page
                alert('You have been verified')
                navigate("/todolistmain/"+data._id);
              } else {
                // Handle email sending error
                console.error("Failed to send verification email");
                alert('You email cant be found')
              }
            })
            .catch((error) => {
              console.error("Error sending verification email:", error);
            });
        } else {
          // Handle registration error
          console.error("Registration failed");
        }
      })
      .catch((error) => {
        console.error("Error during registration:", error);
      });}
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