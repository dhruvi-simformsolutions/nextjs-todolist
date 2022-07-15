import React, {useState} from "react"
import TodoModal from "./TodoModal"

const TodoList = ({onAdd}) =>{
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [todoinput,setTodoInput] = useState("")
    const showorHideModal = () => {
        setIsModalVisible(!isModalVisible);
        setTodoInput("")
      };
    const addTodoInput = (e) =>{
        setTodoInput(e.target.value)
    }

    const handleOk = () =>{
        onAdd(todoinput)
        setTodoInput("")
        setIsModalVisible(!isModalVisible);
    }
    return (
      <>
        <button className="addbtn" type="button" onClick={showorHideModal}>
          ADD TO DO
        </button>
        <TodoModal
        isModalVisible = {isModalVisible}
        handleOk = {handleOk}
        showorHideModal = {showorHideModal}
        addTodoInput = {addTodoInput}
        todoinput = {todoinput}
        onAdd = {onAdd}
        setIsModalVisible = {setIsModalVisible}
        setTodoInput = {setTodoInput}
        />
      </>
    );
}

export default TodoList