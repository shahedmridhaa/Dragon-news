import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { FaStar, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';




const Newsdetils = ({news}) => {
    const {_id, title, details, author, total_view, image_url, rating} = news
    
    return (
        <div>
          <Card className='mb-4'>
      <Card.Header>
         <div>
          <Image
          roundedCircle
           src={author.img}
           style={{width:60}}
          >
          </Image>
         </div>
         <div>
        
         </div>

      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <img className='w-100 py-3' src={image_url} alt="" />
        <Card.Text>
         {
         details.length > 250 ?
         details.slice(0 , 250) + "..." :
         details
         }
         <Link to={`/news/${_id}`}>Read more</Link>

        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between">
        <div>
        <span className='text-warning pe-2'>< FaStar/></span> {rating.number}
        </div>
        <div>
        <span className='pe-2'> <FaEye/> </span>{total_view}
        </div>
        </Card.Footer>
    </Card>
        </div>
    );
};

export default Newsdetils;