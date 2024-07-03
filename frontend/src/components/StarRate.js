import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";

export default function StarRate() {
    const [rating, setRating] = useState(null);
    const [rateColor, setColor] = useState(null);

    return (
        <>
            {[...Array(5)].map((star, index) => {
                const currentRate = index + 1;
                return (
                    <label key={currentRate}>
                        <input 
                            type="radio" 
                            name="rate" 
                            value={currentRate} 
                            onClick={() => setRating(currentRate)} 
                        />
                        <FaStar 
                            color={currentRate <= (rateColor || rating) ? "yellow" : "grey"} 
                            size={20} // Adjust the size as needed
                        />
                    </label>
                );
            })}
        </>
    );
}
