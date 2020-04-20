import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends React.Component {
    renderDish(dish) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments) {
        if (comments != null) {
            return (comments.map((element) => {
                return (
                  <ul  className="list-unstyled">
                        <li>{element.comment}</li>
                        <li>
                            -- {element.author} ,  
                            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(element.date)))}
                        </li> 
                  </ul>
                );
            }))
        }
        else return <div />;
    }

    render() {
        if (this.props.dish != null) {
            return (
                <div className="container">
                    <div  className="row">
                        <div  className="col-12 col-md-5 m-1">{this.renderDish(this.props.dish)}</div>
                        <div  className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            {this.renderComments(this.props.dish.comments)}
                        </div>
                    </div>
                </div>
            );
        }
        else return <div />;
    }
}

export default DishDetail;