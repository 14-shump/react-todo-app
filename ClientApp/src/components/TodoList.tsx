import React from 'react'
import { TodoListType } from '../types'
import { Checkbox, Fab, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

const TodoList = ({ todos, onChange, onClick }: TodoListType ) => {
    return (
        // <ul>
        //     {todos.map((todo) => (
        //         <li key={todo.id}>
        //         <input type="checkbox" checked={todo.isComplete} onChange={() => {onChange(todo.id)}} />
        //         {todo.isComplete ? (<span style={{ textDecorationLine: "line-through" }}>{todo.name}</span>) : (<span>{todo.name}</span>)}
        //         <button onClick={() => onClick(todo.id)}>削除</button> 
        //         </li>
        //     ))}
        // </ul>
        <List sx={{ width: "100%", maxWidth: 300, marginInline: "auto" }}>
            {todos.map((todo) => {
                return (
                    <ListItem key={todo.id} disablePadding>
                        <ListItemButton>
                            <Checkbox checked={todo.isComplete} onChange={() => {onChange(todo.id)}} />
                            <ListItemText>
                                {todo.isComplete ? (<span style={{ textDecorationLine: "line-through" }}>{todo.name}</span>) : (<span>{todo.name}</span>)}
                            </ListItemText>
                            <Fab size="small" color="error" onClick={() => onClick(todo.id)}>
                                <DeleteIcon />
                            </Fab>
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    )
}

export default TodoList
