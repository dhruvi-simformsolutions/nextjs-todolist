import React from "react"
import {Modal} from "antd"

const TodoList = ({isModalVisible,todoinput,showorHideModal,addTodoInput,handleOk,isEdit = false}) =>{
    return (
      <>
        <Modal
          title={isEdit ? "Edit To Do" : "Add To Do"}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={showorHideModal}
          okButtonProps ={{ style: { backgroundColor: '#007481' },disabled : todoinput  ? false : true }}
          okText={isEdit ? "Save" : "Add"}
        >
         <textarea id="txt_area" rows="4" cols="50" value= {todoinput} placeholder="Please type here..." onChange={addTodoInput}></textarea>
        </Modal>
      </>
    );
}

export default TodoList