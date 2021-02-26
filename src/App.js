import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';

function App() {
	const [todoList, setTodoList] = useState(['Take dogs for a Walk', 'Go To The Gym']);
	const [input, setInput] = useState('');

	const addTodo = (event) => {
		event.preventDefault();
		console.log('Working');
		setTodoList([...todoList, input]);
		// to clear the input box
		setInput('');
	};
	return (
		<div className="App">
			<h1>Hello World</h1>
			<form action="">
				<FormControl>
					<InputLabel>New Todo:</InputLabel>
					<Input value={input} onChange={(event) => setInput(event.target.value)} />
				</FormControl>

				<Button disabled={!input} variant="contained" color="primary" onClick={addTodo}>
					Add ToDo Item
				</Button>
				<ul>
					{todoList.map((todoItem) => (
						<li>{todoItem}</li>
					))}
				</ul>
			</form>
		</div>
	);
}

export default App;
