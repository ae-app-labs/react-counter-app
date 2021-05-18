import './App.css';
import {useState, useEffect} from 'react'

function App() {

  const [toDos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      text:todo, 
      status: false,
    }
    setTodos([...toDos, newTodo])
  }

  useEffect( () => {
    // console.log(todo)
  }, [todo])

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>

      <div className="input">
        <input onChange={(e) => setTodo(e.target.value) } value={todo} type="text" placeholder="🖊️ Add item..." />
        <i className="fas fa-plus" onClick={ addTodo }></i>
      </div>

      <div className="todos">
        <br/>
        <div>
          <h2>Pending Tasks</h2>
          {
          toDos.map( (value, index) => {
            if(value.status === false){
              return (
                <div className="todo" key={value.id}>
                <div className="left">
                  <input onChange={ (e) => {
                    
                    setTodos( toDos.filter(obj => {
                      if(obj.id === value.id){
                        obj.status = e.target.checked
                      }
                      return obj
                    }))
  
                  }} type="checkbox" value={value.status} name="" id="" />
                  <p>{value.text}</p>
                </div>
                <div className="right">
                  <i className="fas fa-times" onClick={ (e) => {
                    setTodos( toDos.filter(obj => {
                      if(obj.id !== value.id)
                        return obj
                      else  
                        return null
                    }))
                  } }></i>
                </div>
              </div>
              )
            } else {
              return null
            }
          })
        }
        </div>

        <br/>
        <div>
          <h2>Completed Tasks</h2>
          {
          toDos.map( (value, index) => {
            if( value.status) {
              return (
                <div className="todo" key={value.id}>
                <div className="left">
                  <p>{value.text}</p>
                </div>
              </div>
              )
            } else {
              return null
            }
          })
        }
        </div>
      </div>
    </div>
  );
}

export default App;
