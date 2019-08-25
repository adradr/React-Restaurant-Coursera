import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
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

    renderComments(dish){
        const comments = this.props.dish.map((comment) => {
            return (
                <div key={comment.comments.id}>
                    valami
                </div>
            );
        });
        if (dish != null)
            return(
                <div>
                    <Card>
                        <h4>Comments!</h4>
                        {comments}
                    </Card>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

    render() {
        const selected = this.props.dish;
        return (
            <div className="container">
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(selected)}
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderComments(selected)}
                    </div>
                </div>
            </div>
        )
    }
}

export default DishDetail;