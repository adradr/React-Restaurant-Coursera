import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle><span class="badge badge-dark">{dish.name}</span></CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    render() {
        const detail = this.props.dish
        return (
            <div className="container">
                <div className="row">
                    <div>
                        {this.renderDish(detail)}
                    </div>
                </div>
            </div>
        )
    }
}

export default DishDetail;