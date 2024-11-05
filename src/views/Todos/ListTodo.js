import React from "react";
import './ListTodo.scss';
import AddTodo from "./AddTodo";
import {  toast } from 'react-toastify';

class ListTodo extends React.Component{

    state={
        listTodos:[
            {id: 'todo1', tilte:'Homework' },
            {id: 'todo2', tilte:'Video' },
            {id: 'todo3', tilte:'Fixing' }
        ],
        editTodo:{}
    }

    addNewTodo =(todo) =>{
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })

        toast.success("Wow so easy!");
    }
    handleDelete = (todo) => {
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter (item => item.id !== todo.id)
        this.setState({
            listTodos: currentTodos
        })
        toast.success("delete success")   
    }

    handleEdit =(todo) =>{
        let {editTodo, listTodos} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        if(isEmptyObj === false && editTodo.id === todo.id){
            let listTodosCopy = [...listTodos];
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id))
            listTodosCopy[objIndex].tilte = editTodo.tilte;
            this.setState({
                listTodos:listTodosCopy,
                editTodo:{}
            })
            toast.success('update todo success')
            return;
        } 

        this.setState({
            editTodo: todo
        })
    }

    hanldeOnchangeEditTodo=(event) =>{
        let editTodoCopy={...this.state.editTodo}
        editTodoCopy.tilte = event.target.value;

        this.setState({
            editTodo: editTodoCopy
        })
    }
    render(){
        let{listTodos, editTodo}= this.state;
        // == let listTodos = this.state.listTodos;

        let isEmptyObj = Object.keys(editTodo).length === 0
        return(

            <div className="list-todo-container">
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />
                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item,index)=>{
                            return(
                                <div className="todo-child" key={item.id}>
                                    {
                                        isEmptyObj  === true ?
                                        <span>{index + 1} - {item.tilte}</span>
                                    :
                                    <>
                                        {editTodo.id === item.id  ?
                                            <span>
                                                {index + 1} - <input
                                                 value={editTodo.tilte}
                                                 onChange={(event) => this.hanldeOnchangeEditTodo(event)}
                                                 />
                                            </span>
                                            :
                                            <span>
                                                {index + 1} - {item.tilte}
                                            </span>
                                        }
                                    </>
                                    }

                                <button className="edit"
                                    onClick={() => this.handleEdit(item)}
                                >
                                    {isEmptyObj === false && editTodo.id === item.id ?
                                        'Save' : 'Edit'
                                    
                                    }
                                    </button>
                                <button className="delete"
                                    onClick={() => this.handleDelete(item)}
                                >Delete</button>
        
                                 </div>
                            )
                        })
                    }
           
     
          

                </div>
            </div>
        )
    }


}

export default ListTodo;