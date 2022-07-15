import React, { useState } from "react";
import { PageHeader, message } from "antd";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

const App = () => {
  const [todo, setTodo] = useState([]);

  const addTodo = (data) => {
    setTodo((prevUserList) => {
      return [...prevUserList, { data: data, id: Math.random().toString() }];
    });
    message.success("To Do Added Successfully!")
  };

  const editTodo = (edittodo,editid) => {
   let tododata = todo
   tododata.find(v => v.id === editid).data = edittodo;
   setTodo(tododata)
   message.success("To Do Updated Successfully!")
  };

  const deleteTodo = (data) => {
    let tododata = todo
    tododata = tododata.filter(function( obj ) {
      return obj.id !== data;
    });
    setTodo(tododata)
    message.success("To Do Deleted Successfully!")
  };

  return (
    <>
      <div className="site-page-header-ghost-wrapper">
        <PageHeader
          ghost={true}
          title="TO DO LIST"
          className="title"
        ></PageHeader>
      </div>
      <TodoList onAdd={addTodo} />
      <Todo
        data={todo}
        onEdit={editTodo}
        onDelete={deleteTodo}
      />
    </>
  );
};
export default App;
