// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {isActiveIndex: 0}

  onClickLeft = () => {
    const {isActiveIndex} = this.state

    if (isActiveIndex > 0) {
      this.setState(prevState => ({
        isActiveIndex: prevState.isActiveIndex - 1,
      }))
    }
  }

  onClickRight = () => {
    const {isActiveIndex} = this.state
    const {reviewsList} = this.props

    if (isActiveIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        isActiveIndex: prevState.isActiveIndex + 1,
      }))
    }
  }

  isActiveReview = each => {
    const {imgUrl, username, companyName, description} = each

    return (
      <div className="profile-container">
        <img src={imgUrl} alt={username} className="profile-image" />
        <p className="name">{username}</p>
        <p className="para">{companyName}</p>
        <p className="para">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props
    const {isActiveIndex} = this.state
    const reviewDetails = reviewsList[isActiveIndex]

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="card">
          <button
            type="button"
            className="button"
            onClick={this.onClickLeft}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.isActiveReview(reviewDetails)}
          <button
            type="button"
            className="button"
            onClick={this.onClickRight}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
