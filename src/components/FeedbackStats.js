import { useContext } from 'react';
import FeedbackContext from '../FeedbackConnect';

const FeedbackStats = () => {
    const { feedback } = useContext(FeedbackContext);

    const totalReviews = feedback.length;
    const averageRating = totalReviews
        ? (feedback.reduce((total, { rating }) => total + rating, 0) / totalReviews)
        : 0;

    const reviewText = totalReviews === 1 ? 'Review' : 'Reviews';
    const formattedRating = averageRating.toFixed(1).replace(/\.0$/, '');

    return (
        <div className='feedback-stats'>
            <h4> {totalReviews} {reviewText} </h4>
            <h4> Average Rating: {formattedRating} </h4>
        </div>
    );
};

export default FeedbackStats;
