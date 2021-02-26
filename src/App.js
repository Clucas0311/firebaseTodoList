import React, { useState } from 'react';
import './App.css';

function App() {
	const [todoList, setTodoList] = useState(['Take dogs for a Walk', 'Go To The Gym']);
	return (
		<div className="App">
			<h1>Hello World</h1>
			<input />
			<button>Add Todo</button>
			<ul>
				{todoList.map((todoItem) => (
					<li>{todoItem}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
