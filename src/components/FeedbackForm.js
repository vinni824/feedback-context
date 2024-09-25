import { useState, useContext, useEffect } from 'react';
import Button from './Button';
import RatingSelect from './Rating';
import FeedbackContext from '../FeedbackConnect';
import Card from './Card';

const FeedbackForm = () => {
    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (feedbackEdit.edit) {
            setBtnDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }
    }, [feedbackEdit]);

    const handleTextChange = ({ target: { value } }) => {
        setText(value);
        switch (true) {
            case value === '':
                setBtnDisabled(true);
                setMessage(null);
                break;
            case value.trim().length < 10:
                setMessage('Text must be at least 10 characters');
                setBtnDisabled(true);
                break;
            default:
                setMessage(null);
                setBtnDisabled(false);
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
            };

            feedbackEdit.edit
                ? updateFeedback(feedbackEdit.item.id, newFeedback)
                : addFeedback(newFeedback);

            setBtnDisabled(true);
            setRating(10);
            setText('');
        }
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={setRating} selected={rating} />
                <div className='input-group'>
                    <input
                        onChange={handleTextChange}
                        type='text'
                        placeholder='Write a review'
                        value={text}
                    />
                    <Button type='submit' isDisabled={btnDisabled}>
                        Send
                    </Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    );
};

export default FeedbackForm;
