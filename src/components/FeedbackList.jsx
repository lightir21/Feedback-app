import PropTypes from "prop-types";
import React from "react";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
};

FeedbackList.propTypes = {
  feedback: PropTypes.array.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.string.isRequired,
    })
  ),
};

export default FeedbackList;
