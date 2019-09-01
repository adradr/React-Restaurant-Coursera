import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle ,Media} from 'reactstrap';


class DishDetail extends Component {
    
    constructor(props){
        super(props);
    }

    renderComments(comments){
		
		const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
		
		const listComment = comments.map((dishComment) => {
            const event = new Date(dishComment.date);

            return (
				<div>
					<li key={dishComment.id}>
						<p>{dishComment.comment}</p>
						<p>--- {dishComment.author}, {months[event.getMonth()]} {event.getDate()}, {event.getFullYear()}</p>
					</li>
				</div>
            );
        });

        return (
          
            <div>
              <h4>Comments</h4>
			  <ul className="list-unstyled">
                  {listComment}
              </ul>
            </div>
          
        );
	}
	

	renderDish(dish){
        return(
            <div className="col-12 col-md-5 m-1">
            	<Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

       
    render(){
        if(this.props.detail != null){
            return(
                <div className="row">
                    {this.renderDish(this.props.detail)}
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.detail.comments)}
                    </div>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

}

export default DishDetail;

