import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const News = () => {
    const newsDetils= useLoaderData()
    return (
        <Card >
      <Card.Img variant="top" src={newsDetils.image_url} />
      <Card.Body>
        <Card.Title>{newsDetils.title}</Card.Title>
        <Card.Text>
          {newsDetils.details}
        </Card.Text>
       <Link to={`category/${newsDetils.category_id}`}>
       <Button variant="primary">Go to all news</Button>
       </Link>
      </Card.Body>
    </Card>
    );
};

export default News;