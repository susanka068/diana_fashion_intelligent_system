import React, { Component } from 'react'
import {Card ,Button} from 'react-bootstrap'
export class ProductIndividual extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Product name</Card.Title>
                <Card.Text>
                Product description
                </Card.Text>
                <Button variant="primary">details</Button>
            </Card.Body>
            </Card>
        )
    }
}

export default ProductIndividual
