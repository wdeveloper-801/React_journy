// withCounter.js
import React, { useState } from 'react';

const Higher_Order_Components_file1 = (WrappedComponent) => {
    return function EnhancedComponent(props) {
        const [count, setCount] = useState(0);

        const increment = () => setCount(count + 1);
        const decrement = () => setCount(count - 1);

        return (
            <WrappedComponent count={count} increment={increment} decrement={decrement} {...props} />
        );
    };
};

export default Higher_Order_Components_file1
