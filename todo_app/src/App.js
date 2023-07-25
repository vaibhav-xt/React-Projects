import './App.css';
import { useState, useEffect } from 'react';
import Cards from './components/Cards';

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState(JSON.parse(localStorage.getItem('toDo')) || []);

  useEffect(() => {
    localStorage.setItem('toDo', JSON.stringify(list));
  }, [list]);

  const addValue = (e) => {
    e.preventDefault();
    if (list.some(obj => obj.task === text)) {
      alert('Task is already present!');
    } else if (!text) {
      alert('Empty Value is not allowed!');
    } else {
      const newTask = { task: text, flag: false };
      setList([...list, newTask]);
      setText("");
      localStorage.setItem("toDo", JSON.stringify([...list, newTask]));
    }
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>To-Do List APP</h1>
        <form className='input-section' onSubmit={addValue}>
          <input type="text" value={text} placeholder='Title' onChange={(e) => setText(e.target.value)} />
          <button type='submit'>Add</button>
        </form>
        <div className='list-todo'>
          {
            list.map((task, index) => <Cards key={index} task={task.task} flag={task.flag} list={list} setList={setList} bgColor={index % 2 === 0 ? 'skyblue' : 'white'} />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
