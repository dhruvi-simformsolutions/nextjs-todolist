//components
import React, {useState} from 'react';
import {Card} from "antd"
import TodoModal from "./TodoModal"

const Todo = ({onEdit,onDelete,data}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [todoinput,setTodoInput] = useState("")
    const [todoid,setTodoId] = useState(null)
    const showorHideModal = () => {
        setIsModalVisible(!isModalVisible);
      };
    const addTodoInput = (e) =>{
        setTodoInput(e.target.value)
    }

    const handleOk = () =>{
        onEdit(todoinput,todoid)
        setTodoInput("")
        setIsModalVisible(!isModalVisible);
    }

    const onEditHandler = (id,data) =>{
        showorHideModal()
        setTodoInput(data)
        setTodoId(id)
    }
    return (
        <>
        {
            data && data.length ?
            
            data.map((e,i)=>{
                return (
                    <Card key={i} title={e.data} extra={
                    [
                        <button className="edit-del-btn" onClick={()=> onEditHandler(e.id,e.data)}>Edit</button>,
                        <button className="edit-del-btn" onClick={()=> onDelete(e.id)}>Delete</button>
                    ]
                    }/>
                )
            })
            
            : 
            <div className="title no-data">No Data</div>
        }
        <TodoModal
        isModalVisible = {isModalVisible}
        handleOk = {handleOk}
        showorHideModal = {showorHideModal}
        addTodoInput = {addTodoInput}
        todoinput = {todoinput}
        setIsModalVisible = {setIsModalVisible}
        setTodoInput = {setTodoInput}
        isEdit = {true}
        />

        </>
    );
};
export default Todo;