import { ChangeEvent } from 'react'

export type TodoItemType = {
    id?: number,
    name: string,
    isComplete: boolean
}

export type TodoInputType = {
    text: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onClick: () => Promise<void>
}

export type TodoListType = {
    todos: TodoItemType[],
    onChange: (id?: number) => Promise<void>,
    onClick: (id?: number) => Promise<void>
}