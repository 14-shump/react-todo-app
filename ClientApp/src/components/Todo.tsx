import React from 'react'
import axios from 'axios'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { useState, useEffect, ChangeEvent } from 'react'
import { TodoItemType } from '../types'

const Todo = () => {
    const [todos, setTools] = useState<TodoItemType[]>([]);
    const [text, setText] = useState<string>("");
    
    // テキストボックス入力
    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    // 追加ボタン押下
    const handleAdd = async () => {
        const newTodo = { name: text, isComplete: false };

        try {
            const { data } = await axios.post("api/todoitems", newTodo);
            setTools([...todos, data]);
        }
        catch(e) {
            console.error(e);
        }

        setText("");
    };

    // 完了チェックボックス変更
    const handleChangeStatus = async (id?: number) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });

        const targetTodo = newTodos.filter((todo) => todo.id === id)[0];

        try {
            await axios.put(`api/todoitems/${id}`, targetTodo);
            setTools(newTodos);
        }
        catch(e) {
            console.log(e);
        }
    };

    // 削除ボタン押下
    const handleDelete = async (id?: number) => {
        try {
            await axios.delete(`api/todoitems/${id}`);
            setTools(todos.filter((todo) => todo.id !== id));
        }
        catch(e) {
            console.error(e);
        }
    };

    // ページ初期表示
    useEffect(() => {
        const fetchTodoData = async () => {
            try {
                const { data } = await axios.get("api/todoitems");
                setTools(data);
            }
            catch(e) {
                console.error(e);
            }
        }

        fetchTodoData();
    }, []);

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Todoリスト</h1>
            <TodoInput text={text} onChange={handleChangeInput} onClick={handleAdd} />
            <TodoList todos={todos} onChange={handleChangeStatus} onClick={handleDelete} />
        </div>
    )
}

export default Todo
