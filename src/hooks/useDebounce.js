import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [useDebounce, setUseDebounce] = useState(value);
    useEffect(() => {
        const handle = setTimeout(() => setUseDebounce(value), delay);
        return () => clearTimeout(handle);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return useDebounce;
}

export default useDebounce;
