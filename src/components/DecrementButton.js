import React, { useState } from "react";
const DecrementButton = () => {
    const [currentCount, setCurrentCount] = useState(0);
    const handleClick = () => {
        setCurrentCount(currentCount - 1);
    };
    return (
        <div>  

            
        </div>
    );
};
export default DecrementButton;