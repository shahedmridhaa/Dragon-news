import { updateUserProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Form, Link } from 'react-router-dom';
import { Authcontext } from '../Context/Authprovider/Authprovider';
import Header from '../Page/Shared/Header/Header'

const Register = () => {
    const [accept, setAccept] = useState(false)
      const {regester, updateUserProfile, verifyemail} = useContext(Authcontext)

    const handleRegister = event =>{
        event.preventDefault()
      const form = event.target
      const name = form.name.value
      const photoURL = form.photoURL.value
      const email = form.email.value
      const password = form.password.value



// ====Regestration====
      regester(email, password)
      .then(result =>{
        const user = result.user
        console.log(user);
        form.reset()
        handleUpdateUserProfile(name, photoURL)
        handelEmail()
        toast.success('please varify your email address')
      })
      .catch(e => console.log(e))

    }


// ====UpdeT user profile=====
const handleUpdateUserProfile = (name, photoURL) =>{
    const profile = {
        displayName: name,
        photoURL: photoURL
    }
    updateUserProfile(profile)
    .then(()=>{})
    .catch((e) => console.log(e.message))
}



// ===email verify=====
const handelEmail =() =>{
    verifyemail()
    .then(() =>{})
    .catch(e => console.log(e.message))
}



// ====Verify email address===

    
 


// ====handle checkbox=====
    const handleChaked=(event)=>{
        const check = (event.target.checked);
        setAccept(check)
    }



    return (
        <div>
            <Header></Header>
           <Container className='py-5 '>
            <h2 className='py-4 text-primary'>Please Regester</h2>
            
       <Form onSubmit={handleRegister} >
       <div className='pb-3'>
            <label htmlFor="" className='pe-3'>name</label>
            <input className='svg-shadow shadow-gray shadow-intensity-lg" border border-none w-25 py-2 rounded' type="name" name="name" placeholder='name' />
        </div>
        <div className='pb-3'>
            <label htmlFor="" className='pe-3'>PhotoUrl</label>
            <input className='svg-shadow shadow-gray shadow-intensity-lg" border border-none w-25 py-2 rounded' type="PhotoURL" name="photoURL" placeholder='PhotoUrl' />
        </div>
        <div className='pb-3'>
            <label htmlFor="" className='pe-3'>Email</label>
            <input className='svg-shadow shadow-gray shadow-intensity-lg" border border-none w-25 py-2 rounded' type="email" name="email" placeholder='email' />
        </div>
        <div className='pb-3'>
            <label htmlFor="" className='pe-3'>Password</label>
            <input className='svg-shadow shadow-gray shadow-intensity-lg" border border-none w-25 py-2 rounded' type="password" name="password" placeholder='password' />
        </div>
        <div>
            Already you have account? Please <Link to='/login' className='text-decoration-none'>Login</Link>
        </div>
        <div className="my-3" onClick={handleChaked}>
        <input type="checkbox"/> <label className='ps-2'>accept all trams and conditions</label>
      </div>
         <Button variant="primary" type="submit" disabled={!accept}>
                Submit
        </Button>
        </Form>
       </Container>
        </div>
    );
};

export default Register;