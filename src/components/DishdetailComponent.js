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
                      <CardTitle><span className="badge badge-dark">{dish.name}</span></CardTitle>
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
        
        if (dish != null){
            const comments = this.props.dish.comments.map((comment) => {
                return (
                    <div>
                        <ul key={comment.id} className="list-unstyled">
                            <li>{comment.comment}</li>
                            <li>-- {comment.author}, {comment.date}</li>
                        </ul>
                    </div>
                );
            });

            return(
                <div>
                    <Card>
                        <h4>Comments!</h4>
                        {comments}
                    </Card>
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
            
    }

    render() {
        const selected = this.props.dish;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(selected)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(selected)}
                    </div>
                </div>
            </div>
        )
    }
}

export default DishDetail;