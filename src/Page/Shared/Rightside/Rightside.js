import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import banner1 from "../../../assest/banner1.png"
import banner2 from "../../../assest/banner2.png"
import React, { useContext } from 'react';
import { Carousel, ListGroup } from 'react-bootstrap';
import { Authcontext } from '../../../Context/Authprovider/Authprovider';
import { GoogleAuthProvider } from 'firebase/auth';


const Rigthside = () => {

  const {userLogin} = useContext(Authcontext)
  const googleProvider = new GoogleAuthProvider()

  const handleLogin = () =>{
    userLogin(googleProvider)
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
    .catch(error =>{
      console.error(error)
    })
  } 

    return (
        <div>
          <div className="d-grid gap-2">
            <Button onClick={handleLogin} variant="primary" size="lg">
              <FaGoogle></FaGoogle>  Sign in with Google
            </Button>
            <Button variant="secondary" size="lg">
               <FaGithub></FaGithub> Sign in with Github
            </Button>
       </div>
       <div className='mt-4'>
        <h5>Find us</h5>
        <ListGroup>
      <ListGroup.Item className='my-3'>Facebook</ListGroup.Item>
      <ListGroup.Item className='my-3'>Twitter</ListGroup.Item>
      <ListGroup.Item className='my-3'>Instragram</ListGroup.Item>
      <ListGroup.Item className='my-3'>LinkedIn</ListGroup.Item>
    </ListGroup>
       </div>



    <div>
    <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
       
        </div>
    );
};

export default Rigthside;