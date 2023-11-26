
// import { useContext } from 'react';
// import { FcGoogle } from 'react-icons/fc';
// import { AuthContext } from '../../Provider/AuthProvider';

// const SocialLogin = () => {

//     const {user, googleLogin} = useContext(AuthContext)
    
//     const handleSocialLogin = (media) =>{
//         media()
//         .then(res=>console.log(res))
//         .catch(err => console.log(err))
//     }
//     return (
//         <div>
//         <div>
//             <button onClick={() =>handleSocialLogin(googleLogin)}
//             className='btn btn-outline w-56'>
//             <FcGoogle></FcGoogle>
//             signIn with Goole
//             </button>
//         </div>
//     </div>
//     );
// };

// export default SocialLogin;