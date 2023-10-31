

'use client'
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import useCreateUsers from '../hooks/usePostRegistration';
import { useRouter } from 'next/navigation';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { handleRegister } = useCreateUsers({
    username,
    email,
    password,
    first_name: firstName,
    last_name: lastName,
  });
  const router = useRouter();

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleCreateUser = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    

    if (!useCreateUsers) {
      toast.error('Please fill in all fields.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
        hideProgressBar: true,
      });
      return;
    }

    const response:any = await handleRegister();

    if (response && response.error) {
      const { username: usernameError, email: emailError } = response.error;

      if (usernameError && usernameError.includes('already exists')) {
        toast.error('Username already exists.', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
          hideProgressBar: true,
        });
      }

      if (emailError && emailError.includes('already exists')) {
        toast.error('Email already exists.', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
          hideProgressBar: true,
        });
      }

      return;
    }

    toast.success('You have successfully registered! Please log in.', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000,
      hideProgressBar: true,
    });
    router.push('/login');

    
  };


return (
<div className="flex justify-center items-center h-screen bg-white">
<ToastContainer />
<div className="bg-white rounded px-8 pt-6 pb-8 mb-4 shadow-[0 2px 4px rgba(0, 0, 0, 0.4)]">
<h1 className="text-green text-4xl mb-4 font-bold">REGISTER TO DASHBOARD</h1>
<form onSubmit={handleCreateUser}>
<div className="mb-4">
<label className="block text-black mt-4 text-2xl mb-2" htmlFor="firstName">
First Name
</label>
<input
className="shadow-lg appearance-none rounded-lg bg-gray hover:shadow-xl h-16 border rounded w-full py-3 px-4 text-blackleading-tight focus:outline-none focus:shadow-outline"
id="firstName"
type="text"
placeholder="Enter your first name"
value={firstName}
onChange={(e) => setFirstName(e.target.value)}
required
/>
</div>
<div className="mb-4">
<label className="block text-black text-2xl mb-2" htmlFor="lastName">
Last Name
</label>
<input
className="shadow-lg appearance-none rounded-lg bg-gray hover:shadow-xl h-16 border rounded w-full py-3 px-4 text-blackleading-tight focus:outline-none focus:shadow-outline"
id="lastName"
type="text"
placeholder="Enter your last name"
value={lastName}
onChange={(e) => setLastName(e.target.value)}
required
/>
</div>
<div className="mb-4">
<label className="block text-black text-2xl mb-2" htmlFor="username">
Username
</label>
<input
className="shadow-lg appearance-none rounded-lg bg-gray hover:shadow-xl h-16 border rounded w-full py-3 px-4 text-blackleading-tight focus:outline-none focus:shadow-outline"
id="username"
type="text"
placeholder="Enter your username"
value={username}
onChange={(e) => setUsername(e.target.value)}
required
/>
</div>
<div className="mb-4">
<label className="block text-black text-2xl mb-2" htmlFor="email">
Email
</label>
<input
className="shadow-lg appearance-none rounded-lg bg-gray hover:shadow-xl h-16 border rounded w-full py-3 px-4 text-blackleading-tight focus:outline-none focus:shadow-outline"
id="email"
type="email"
placeholder="Enter your email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
/>
</div>
<div className="mb-4">
<label className="block text-black text-2xl mb-2" htmlFor="password">
Password
</label>
<div className="relative">
<input
className="shadow-lg appearance-none rounded-lg bg-gray hover:shadow-xl h-16 border rounded w-full py-3 px-4 text-blackleading-tight focus:outline-none focus:shadow-outline"
id="password"
type={showPassword ? 'text' : 'password'}
placeholder="Enter your password"
value={password}
onChange={(e) => setPassword(e.target.value)}
required
/>
<span className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer" onClick={handleTogglePassword} >
{showPassword ? <FaEyeSlash className="text-2xl"/> : <FaEye className="text-2xl" />}
</span>
</div>
</div>
<div className="items-center justify-between">
<button className="bg-green hover:bg-green-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
Sign Up
</button>
<Link href="/login">
<div className="text-left font-semibold text-[20px] mt-[20px]">
Already have an account? <span className="text-green p-1 m-1">Log in.</span>
</div>
</Link>
</div>
</form>
</div>
</div>
);
};

export default RegistrationPage;
