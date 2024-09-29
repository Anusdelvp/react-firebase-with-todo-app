import React, { useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../Config';





const Login = () => {
  
const email =useRef()
const  password = useRef()
const navigate =useNavigate()

// function Login(event){
//   event.preventDefault
// }
  //  const auth = getAuth();
  function receivedData(event){
    event.preventDefault()
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
     // Signed in 
     const user = userCredential.user;
     console.log(user);
     navigate(`/Home`)
   })
   .catch((error) => {
     const errorCode = error.code;
   const errorMessage = error.message;
    });



  }
 

     
     
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              
              ref={email}
              
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              required
              placeholder="you@example.com"
              />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              
              ref={password}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              required
              placeholder="••••••••"
            />
          </div>
          <div className="form-control mt-6"> 

          </div>
          <button onClick={receivedData} 
           
          >submit
             {/* <h1><Link to='Home'>Login</Link></h1>  */}
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account? <a href="Register" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login






































// import React, { useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { auth} from '/Config.jsx'

// const LoginPage = () => {
  


  
//   const  email = useRef()
//   const  password = useRef()
//   const navigate = useNavigate()


//   function loginFunction(event){
// event.preventDefault()
//     signInWithEmailAndPassword(auth, email.current.value, password.current.value)
//     .then((userCredential) => {
      
      
//       const user = userCredential.user;
//     navigate(/Home)
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(error)
//   });
  
// }


//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="card w-96 bg-base-100 shadow-xl">
//         <div className="card-body">
//           <h2 className="card-title text-center">Login</h2>
//           <form>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input
//                 type="email"
//                 ref={email}
//                 placeholder="your-email@example.com"
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Password</span>
//               </label>
//               <input
//                 type="password"
//                ref={password}
//                 placeholder="****"
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="form-control mt-6">
//               <button type="submit" className="btn btn-primary" onClick={loginFunction}>
//                 <Link to="home">Login</Link>
//               </button>
//             </div>
//           </form>
//           <div className="mt-4 text-center">
            
//               {/* <button> <Link to="Home">Already a user  ? log in</Link></button> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;