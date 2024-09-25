import { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../FeedbackConnect';

const FeedbackList = () => {
    const { feedback } = useContext(FeedbackContext);

    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>;
    }

    return (
        <div className='feedback-list'>
            {feedback.map((item) => (
                <div key={item.id}>
                    <FeedbackItem item={item} />
                </div>
            ))}
        </div>
    );
};

export default FeedbackList;
