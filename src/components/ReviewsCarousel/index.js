// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeIndex: 0}

  onLeft = () => {
    const {activeIndex} = this.state
    if (activeIndex > 0) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex - 1}))
    }
  }

  onRight = () => {
    const {activeIndex} = this.state
    const {reviewsList} = this.props
    if (activeIndex < reviewsList.length - 1) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props

    const {activeIndex} = this.state
    return (
      <div className="bg-container">
        <button
          className="button"
          type="button"
          testId="leftArrow"
          onClick={this.onLeft}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            className="left"
          />
        </button>
        <div className="container">
          <h1 className="head">Reviews</h1>
          <img
            className="image"
            src={reviewsList[activeIndex].imgUrl}
            alt={reviewsList[activeIndex].username}
          />
          <p className="name">{reviewsList[activeIndex].username}</p>
          <p className="company">{reviewsList[activeIndex].companyName}</p>
          <p className="desc">{reviewsList[activeIndex].description}</p>
        </div>
        <button
          className="button"
          type="button"
          testId="rightArrow"
          onClick={this.onRight}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
            className="left"
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel
