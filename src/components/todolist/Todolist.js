import React,{useRef, useState} from 'react';
import { Button, InputGroup, FormControl, Table } from 'react-bootstrap';
import AppNavbar from '../navbar/AppNavbar';
import * as Icon from 'react-bootstrap-icons';


function Todolist() {
    const newTodoTask = useRef(null);
    const [todoList, setTodoList] = useState([]);
    
    const [editContactId, setEditContactId] = useState(null);
    const inputRef = useRef('');

    const createNewTodoItem =() =>{
        let newTodoItem = newTodoTask.current.value;
        if(newTodoItem === ''){
            newTodoTask.current.style.border="1px solid red";
        }else{
            setTodoList([...todoList, newTodoItem]);
            newTodoTask.current.value ="";
            newTodoTask.current.style.border="1px solid blue";
        }  
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            createNewTodoItem();
        }
      }
    const deleteTodoItem = (arrayIndex) =>{
        const newTodoList = [...todoList];
        newTodoList.splice(arrayIndex, 1);
        setTodoList(newTodoList);
    }
    const enableEdit = (arrayIndex) =>{
        setEditContactId(arrayIndex);
    }
    const editedTodoItem = (arrayIndex) =>{
        const updatedTodoItem = [...todoList];
        updatedTodoItem.splice(arrayIndex, 1, inputRef.current.value);
        setTodoList(updatedTodoItem);
        setEditContactId(null);
    }
    const cancelEdit =() =>{
        setEditContactId(null);
    }
    return (
    <div>
    <AppNavbar/>
    <div className="todo-container">
        <h1>TodoList Application</h1>
        <div>
            <InputGroup size="lg">
                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" ref={newTodoTask} onKeyDown={handleKeyDown}/>
                <Button variant="primary" onClick={createNewTodoItem}>New Task</Button>
            </InputGroup> 
        </div>   
        <div>
            <h2>Your todo items are</h2>
            <Table responsive="sm">
            <thead>
                <tr key="header">
                <th>Task Number</th>
                <th>Task</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody> 
            {todoList.map((list, index) =>
                <React.Fragment>
                { editContactId === index ?
                    <tr key={list}>
                    <td>{index+1}</td>
                    <td><input type="text" defaultValue={list} ref={inputRef} /></td>
                    <td className="editMenuWithRedColor" onClick={cancelEdit}>Cancel</td>
                    <td className="editMenuWithBlueColor" onClick={() => editedTodoItem(index)}>Save</td>
                </tr> 
                :
                <tr key={list}>
                    <td>{index+1}</td>
                    <td>{list}</td>
                    <td className="editMenu"><Icon.Pencil onClick={() => enableEdit(index)}/></td>
                    <td className="editMenu"><Icon.Trash onClick={() => deleteTodoItem(index)}/></td>
                </tr>
                } 
                </React.Fragment>
                )}
            </tbody>
            </Table>
            </div>
        </div>
    </div>
    )
}

export default Todolist
