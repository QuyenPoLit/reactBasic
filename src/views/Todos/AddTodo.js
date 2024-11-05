import React from "react";
import { ToastContainer, toast } from 'react-toastify';

class AddTodo extends React.Component{
    state={
        tilte:''
    }
    handleOnChangeTitle = (event) =>{
        this.setState({
            tilte:event.target.value
        })
    }
    handleAddTodo = () =>{
        if(!this.state.tilte){
            toast.error(`Missing title`)
            return;
        }
        let todo ={
            id:  Math.floor(Math.random()* 10000),
            tilte: this.state.tilte
        }
        this.props.addNewTodo(todo)
        this.setState({
            tilte:''
        })
    }
    render (){
        let {tilte} = this.state;
        return(
            <div className="add-todo">
            <input type="text" value={tilte}
                onChange={(event) => this.handleOnChangeTitle(event)}
            />
            <button type="button" className="add"
            onClick={() => this.handleAddTodo()}
            >Add
            </button>
            </div>
        )
    }
}

export default AddTodo