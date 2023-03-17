import React from 'react'
import { TodoInputType } from '../types'
import { Fab, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const TodoInput = ({ text, onChange, onClick }: TodoInputType) => {
    return (
        <>
            {/* <input type="text" onChange={onChange} value={text} />
            <button onClick={onClick}>追加</button> */}
            <TextField 
                sx={{ width: "100%", maxWidth: 270, marginRight: 2, marginBottom: 2 }}
                size="small"
                variant="outlined"
                onChange={onChange}
                value={text}
            />
            <Fab size="small" color="primary" onClick={onClick}>
                <AddIcon />
            </Fab>
        </>
    )
}

export default TodoInput
