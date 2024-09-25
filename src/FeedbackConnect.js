import { createContext, useState } from 'react';
import feedbackData from './FeedbackData'; // Import static data

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState(feedbackData);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    });

    // Add feedback
    const addFeedback = (newFeedback) => {
        // Generate a new id (could be improved for production)
        const newId = feedback.length ? Math.max(...feedback.map(f => f.id)) + 1 : 1;
        const feedbackWithId = { ...newFeedback, id: newId };
        setFeedback([feedbackWithId, ...feedback]);
    };

    // Delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    // Update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item)));

        // Reset feedbackEdit state
        setFeedbackEdit({
            item: {},
            edit: false,
        });
    };

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        });
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                feedbackEdit,
                deleteFeedback,
                addFeedback,
                editFeedback,
                updateFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
