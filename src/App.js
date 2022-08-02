import "./styles/styles.css";
import { useLayoutEffect, useEffect, useRef, useState } from "react";

function App() {
    const [todosList, setTodosList] = useState([]);
    const [todosName, setTodosName] = useState('');
    const [todosId, setTodosId] = useState(0);

    const [editTodosName, setEditTodosName] = useState('');
    const editTodosForm = useRef();
    const editTodosInput = useRef();

    const onSubmit=(e)=>{
      e.preventDefault();
      setTodosList([...todosList,{id:Date.now(),name:todosName,status:false}]);
      setTodosName('')
    }


    const onEditSubmit=(e)=>{
      e.preventDefault();
      editTods(todosId)
      setTodosId(0)
      setEditTodosName('');
      editTodosForm.current.style.display = 'none';    
    }

    const deleteTodos =(id)=>{
      setTodosList(todosList.filter(todos=>todos.id !== id))
    }

    // https://lottiefiles.com/108344-mars

    const editTods =(id)=>{
      todosList.map((todos)=>{
        if(todos.id === id){
          todos= {id:todos.id,name:todos.name = editTodosName}
        }
      })
    }
    const completeTodos =(id)=>{
      todosList.map((todos)=>{
        if(todos.id === id){
          console.log('found');
          todos= {id:todos.id,name:todos.name,status:todos.status = !todos.status}
        }
      })
      console.log(todosList);
    }

    useLayoutEffect(()=>{
      editTodosForm.current.style.display = 'none';
    },[todosList])


    return (
        <>
            <div>
                <h2>Todos list</h2>
                <form onSubmit={onSubmit}>
                    <input type="text" 
                    value={todosName}
                    onChange={(e)=>{
                      setTodosName(e.target.value);
                    }}
                    />
                    <button>Add</button>
                </form>
                <form onSubmit={onEditSubmit} ref={editTodosForm}>
                    <input type="text" 
                    ref={editTodosInput}
                    value={editTodosName}
                    onChange={(e)=>{
                      setEditTodosName(e.target.value);
                    }}
                    />
                    <button>Edit</button>
                </form>
                <ul>
                    {todosList.map((todos) => (
                        <li key={todos.id}>
                           <p style={{textDecoration:todos.status === true?'line-through':'none'}}> {todos.name} </p>
                            <button
                            onClick={()=>{
                              editTodosForm.current.style.display = 'flex';
                              editTodosInput.current.focus();
                              setEditTodosName(todos.name)
                              setTodosId(todos.id);

                            }}
                            >Edit</button>
                            <button
                            onClick={()=>{deleteTodos(todos.id)}}
                            >Delete</button>
                            <button
                            onClick={()=>{completeTodos(todos.id)}}
                            >Complete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default App;
