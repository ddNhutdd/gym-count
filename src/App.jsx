import { useCount } from "./useCount.js";

function App() {
	const [count1, setCount1] = useCount(1, 1);
	const [count2, setCount2] = useCount(1, 2);
	return (
		<>
			<div>
				Count {count1}
			</div>
			<div>
				<button onClick={setCount1} type="button" className="btn btn-primary">Add 1</button>
			</div>
			<div>
				Count {count2}
			</div>
			<div>
				<button onClick={setCount2} type="button" className="btn btn-primary">Add 2</button>
			</div>
		</>
	)
}
export default App
