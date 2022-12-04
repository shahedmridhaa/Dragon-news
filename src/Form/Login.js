import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../Context/Authprovider/Authprovider';
import Header from '../Page/Shared/Header/Header';


const Login = () => {

    const {UserLogin} =useContext(Authcontext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'


    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value


 // ====Create login form data====
        UserLogin (email, password)
        .then(result =>{
            const user = result.user;
            form.reset()
            if(user.emailVerified){
                navigate(from,  {replace: true})
            }
            else{
                toast.error('please varified your email address')
            }
        })
        .catch(e => console.log(e.message))
    }



    return (
        <div>
            <Header></Header>
       <Container className='py-5'>
       <h2 className='py-4 text-primary'>Please Login</h2>
       <Form onSubmit={handleLogin} >
        <div className='pb-3'>
            <label htmlFor="" className='pe-3'>Email</label>
            <input className='svg-shadow shadow-gray shadow-intensity-lg" border border-none w-25 py-2 rounded' type="email" name="email" placeholder='email' />
        </div>
        <div className='pb-3'>
            <label htmlFor="" className='pe-3'>Password</label>
            <input className='svg-shadow shadow-gray shadow-intensity-lg" border border-none w-25 py-2 rounded' type="password" name="password" placeholder='password' />
        </div>
        <div className='pb-3'>Are you new ? please <Link to="/regester" className='text-decoration-none'>create new account</Link></div>
         <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
       </Container>
        </div>
    );
};

export default Login;