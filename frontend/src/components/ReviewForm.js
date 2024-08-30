import { useState, useEffect } from "react";

const ReviewForm = ({ restroom }) => {
    const [restroomName, setRestroomName] = useState(restroom);
    const [stars, setStars] = useState('');
    const [review, setReview] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    useEffect(() => {
        setRestroomName(restroom);
    }, [restroom]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const restroomReview = { restroom: restroomName, stars, review };

        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/reviews/`, {
            method: 'POST',
            body: JSON.stringify(restroomReview),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setEmptyFields([]);
            setRestroomName('');
            setStars('');
            setReview('');
            setError(null);
            console.log('new review added');
        }
    };

    return (
        <form className="create" onSubmit={handleSubmit}>
            <label>Stars (1-5):</label>
            <input
                type="number"
                onChange={(e) => setStars(e.target.value)}
                value={stars}
                className={emptyFields.includes('stars') ? 'error' : ''}
            />
            <label>Review:</label>
            <input
                type="text"
                onChange={(e) => setReview(e.target.value)}
                value={review}
                className={emptyFields.includes('review') ? 'error' : ''}
            />
            <button>Post Review</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
};

export default ReviewForm;
