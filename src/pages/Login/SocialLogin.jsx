
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    }
    return (
        <div>
            <div className="divider"></div>
        <div className='m-4 ml-24'>
            <button onClick={handleGoogleSignIn} className='btn'>
            <FcGoogle className='text-3xl mr-2'></FcGoogle>
            signIn with Goole
            </button>
        </div>
    </div>
    );
};

export default SocialLogin;