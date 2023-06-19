import React, {Component} from 'react';
import StarRatings from 'react-star-ratings';
  
class Foo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        rating: 0 // initial rating value
      };
      this.changeRating = this.changeRating.bind(this);
    }

    changeRating( newRating, name ) {
      this.setState({
        rating: newRating
        
      });
     
    }
 
    render() {
       
      return (
        <StarRatings
          rating={this.state.rating}
          starRatedColor="orange"
          changeRating={this.changeRating}
          numberOfStars={5}
          name='rating'
          starDimension="2.5vw"
        />
        
      );
    }
}

export default Foo;
