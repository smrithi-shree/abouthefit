import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import products from '../products'
import { useParams } from 'react-router-dom'
import props from 'prop-types'

function ProductScreen({match}) {
    
    //const { id } = useParams();

    
    const findproduct=products.find((p)=>p._id===match.params.id)
    //console.log(id)
    //console.log(p._id)
    //products.print()
    //const findproduct=products[1]
    
    return (
        
        <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            <h3>p._id</h3>
            <Row>
                <Col md={6}>    
                    <Image src={findproduct.image} alt={findproduct.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{findproduct.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: Rs. {findproduct.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {findproduct.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}></Col>
            </Row>
    </div>
    )
}

export default ProductScreen
