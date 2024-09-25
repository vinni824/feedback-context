import PropTypes from 'prop-types';
import { FaUserEdit } from 'react-icons/fa';
import { TiUserDelete } from 'react-icons/ti';
import { useContext } from 'react';
import Card from './Card';
import FeedbackContext from '../FeedbackConnect';

const FeedbackItem = ({ item }) => {
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

    const handleDelete = () => deleteFeedback(item.id);
    const handleEdit = () => editFeedback(item);

    return (
        <Card>
            <button onClick={handleDelete} className='close'>
                <TiUserDelete color='red' />
            </button>
            <div className='num-display'>{item.rating}</div>
            <button onClick={handleEdit} className='edit'>
                <FaUserEdit color='blue' />
            </button>
            <div className='text-display'>{item.text}</div>
        </Card>
    );
};

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default FeedbackItem;
