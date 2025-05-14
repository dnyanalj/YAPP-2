import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	
    const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

    return (
    
	<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-300'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
					Login 
					<span className='text-blue-500'> Yapp </span>
				</h1>
                <form onSubmit={handleSubmit}>
                    <div className="pt-5 pb-1">
                        <label className='label'>
							<span className='text-base label-text  text-gray-300'>Username</span>
						</label>
                        <input
							type='text'
							placeholder='Enter username'
							className='w-full input input-bordered h-10 border-gray-500 focus:outline-none focus:border-green-600  text-gray-400'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
                    </div>

                    <div className="pt-1 pb-1">
						<label className='label'>
							<span className='text-base label-text  text-gray-300'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10 border-gray-500 focus:outline-none focus:border-green-600  text-gray-400'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

                    <Link to='/signup' className='text-sm  hover:underline  text-gray-300 hover:text-blue-400 mt-2 inline-block'>
						{"Don't"} have an account?
					</Link>

                    <div>
						<button className='btn btn-block btn-sm mt-2 bg-green-700 text-white hover:bg-green-600 disabled:bg-green-300 ' disabled={loading}>
						{loading ? <span className='loading loading-spinner '></span> : "Login"}
						</button>
					</div>

                </form>
        </div>
    </div>
);
};

export default Login;




// const Login = () => {
//     return (
//       <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//           <div className='w-full p-6 rounded-lg shadow-md bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//                   <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                       Login
//                       <span className='text-blue-500'> ChatApp</span>
//                   </h1>
//                   <form action="">
//                       <div>
//                           <label className='label p-2'>
//                               <span className='text-base label-text'>Username</span>
//                           </label>
//                           <input
//                               type='text'
//                               placeholder='Enter username'
//                               className='w-full input input-bordered h-10'
                              
//                           />
//                       </div>
  
//                       <div>
//                           <label className='label'>
//                               <span className='text-base label-text'>Password</span>
//                           </label>
//                           <input
//                               type='password'
//                               placeholder='Enter Password'
//                               className='w-full input input-bordered h-10'
//                           />
//                       </div>
//                       <a to='#' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
//                           {"Don't"} have an account?
//                       </a>
  
//                       <div>
//                           <button className='btn btn-block btn-sm mt-2'>
//                               Login
//                           </button>
//                       </div>
//                   </form>
//           </div>
//       </div>
//     );
//   };
  
//   export default Login;
  