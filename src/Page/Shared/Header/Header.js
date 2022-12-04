import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../Context/Authprovider/Authprovider';
import Leftside from '../Leftside/Leftside'
import Rightside from '../Rightside/Rightside'

const Header = () => {
const {user, logout} = useContext(Authcontext)


const handleLogout =() =>{
  logout()
  .then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}
  

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home"><b><Link to='/'>DRAGON NEWS</Link></b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto align-center">
           

           <div className='row'>
           <div className='d-lg-none'>
            <Leftside></Leftside>
            </div>
            <div className='d-lg-none'>
                <Rightside></Rightside>
            </div>
           </div>
               
          </Nav>
          <Nav>
          <Link className="px-2 text-dark text-decoration-none" to='/home'>Home</Link>
         
       <span>
       {
        user?.uid ?
        <>
           {user?.displayName}
          <Image style={{height: '40px'}} roundedCircle src={user.photoURL}></Image>
          <Button onClick={handleLogout} className='btn btn-sm ms-2'>SignOut</Button>
        </>
         :
        <>
         <Link className="px-2 text-dark text-decoration-none" to='/login'>Login</Link>
            <Link className="px-2 text-dark text-decoration-none" to='/regester' >Regester</Link>
            <FaUser></FaUser>
        </>
       
        }
       </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;