import React, {Component}  from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class DishDetail extends Component {

    renderComments(comments){
        const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        return(
            comments.map(comment => 
                <li className="mt-3">
                    {comment.comment}<br />
                    --{comment.author}, {months[new Date(comment.date).getMonth()]} {new Date(comment.date).getDay()}, {new Date(comment.date).getFullYear()}
                </li>
            )
        );
    }

    render(){
        return(
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div  className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {this.renderComments(this.props.dish.comments)}
                    </ul>
                </div>
            </div>
        );
    }

}

export default  DishDetail;