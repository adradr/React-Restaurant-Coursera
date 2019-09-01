import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.monthNames = ["January", "February", "March", "April", "May",
            "June", "July", "August", "September", "October", "November",
            "December"
        ];
    }

    renderDish(dish) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments) {
        const rendered = comments.map((comment) => {
            const date = new Date(Date.parse(comment.date));
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>
                        {"-- " + comment.author + ", "
                        + this.monthNames[date.getMonth()].substring(0, 3)
                        + " " + date.getDate() + ", " + date.getFullYear()}
                    </p>
                </li>
            );
        });

        if (comments != null) {
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {rendered}
                    </ul>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        var dish = this.props.selectedDish;
        if (dish != null) {
			return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.selectedDish.comments)}
                    </div>
                </div>
			)
		} else {
			return (
				<div></div>
			);
		}
    }
}

export default DishDetail;
