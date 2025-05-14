 import React from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from '../../hooks/useSignup';

const Signup = () => {
    
    const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

    const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

    const handleSubmit = async (e) => {
        e.preventDefault();
		await signup(inputs);
	};

   return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-300'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                SignUp
                <span className='text-blue-500'> Yapp</span>
            </h1>
            <form onSubmit={handleSubmit}>
                <div className='pt-5'>
                    <label className='label text-gray-300 '>
                        <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input
                        type='text'
                        placeholder='John Doe'
                        className='w-full input input-bordered h-10  border-gray-500 focus:outline-none focus:border-green-600  text-gray-400'
                        value={inputs.fullName}
                        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                    />
                </div>

                <div>
                    <label className='label text-gray-300'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input
                        type='text'
                        placeholder='johndoe'
                        className='w-full input input-bordered h-10  border-gray-500 focus:outline-none focus:border-green-600  text-gray-400'
                        value={inputs.username}
						onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                    />
                </div>

                <div>
                    <label className='label text-gray-300'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input
                        type='password'
                        placeholder='Enter Password'
                        className='w-full input input-bordered h-10  border-gray-500 focus:outline-none focus:border-green-600  text-gray-400'
                        value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                    />
                </div>

                <div>
                    <label className='label text-gray-300'>
                        <span className='text-base label-text'>Confirm Password</span>
                    </label>
                    <input
                        type='password'
                        placeholder='Confirm Password'
                        className='w-full input input-bordered h-10  border-gray-500 focus:outline-none focus:border-green-600  text-gray-400'
                        value={inputs.confirmPassword}
						onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                    />
                </div>

                <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                <Link to='/login' className='text-sm  hover:underline hover:text-blue-400 mt-2 inline-block'>
                    Already have an account?
                </Link>

                <div>
                    <button className='btn btn-block btn-sm mt-2  bg-green-700 text-white hover:bg-green-600 disabled:bg-green-300'
                    disabled={loading}>
                        {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                    </button>

                    {/* disabled={loading} means
                    When loading is true, the button becomes disabled.
                    (means: you can't click it again while something is loading, like during API call.) */
                    }
                    
                </div>
            </form>
    </div>
    </div>
)
} 
export default Signup



// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'
 
//  const Signup = () => {
//    return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//     <div className='w-full p-6 rounded-lg shadow-md bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//             <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                 SignUp
//                 <span className='text-blue-500'> ChatApp</span>
//             </h1>
//             <form action="">
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>Full Name</span>
//                     </label>
//                     <input
//                         type='text'
//                         placeholder='John Doe'
//                         className='w-full input input-bordered h-10'
                        
//                     />
//                 </div>

//                 <div>
//                     <label className='label'>
//                         <span className='text-base label-text'>Username</span>
//                     </label>
//                     <input
//                         type='text'
//                         placeholder='johndoe'
//                         className='w-full input input-bordered h-10'
//                     />
//                 </div>

//                 <div>
//                     <label className='label'>
//                         <span className='text-base label-text'>Password</span>
//                     </label>
//                     <input
//                         type='password'
//                         placeholder='Enter Password'
//                         className='w-full input input-bordered h-10'
//                     />
//                 </div>

//                 <div>
//                     <label className='label'>
//                         <span className='text-base label-text'>Confirm Password</span>
//                     </label>
//                     <input
//                         type='password'
//                         placeholder='Confirm Password'
//                         className='w-full input input-bordered h-10'
//                     />
//                 </div>
//                 <GenderCheckbox></GenderCheckbox>

//                 <a to='#' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
//                     Already have an account?
//                 </a>

//                 <div>
//                     <button className='btn btn-block btn-sm mt-2'>
//                         Login
//                     </button>
//                 </div>
//             </form>
//     </div>
//     </div>
// )
// } 
// export default Signup
