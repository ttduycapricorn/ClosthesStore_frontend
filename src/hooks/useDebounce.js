import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
    const [deBounce, setDeBounce] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDeBounce(value);
        }, delay);
        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return deBounce;
};

export default useDebounce;
