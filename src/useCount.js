import { useState } from 'react';

export const useCount = (initial, value) => {
	const [count, setCount] = useState(initial);
	const add = () => setCount(state => state + value);

	return [count, add];
}