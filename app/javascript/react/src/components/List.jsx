import * as React from 'react';
import { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom/client';

const List = () => {
  const [lists, setLists] = useState([])

  useEffect(() => {
    fetch("/api/lists")
      .then((response) => response.json())
      .then((data) => setLists(data));
  }, []);

  const DeleteList = (listID) =>{
    confirm("Are you sure you want to delete this list?") && 
    fetch(`/api/lists/${listID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": document.querySelector('[name="csrf-token"]').content
      }
    })
    .then((response) => {
      if (response.ok) {
        alert("List deleted successfully");
        setLists(lists.filter(list => list.id !== listID));
      }
    })
    .catch((error) => console.log(error));
  }
  
  const CreateList = (event) => {
    event.preventDefault();
    console.log("CreateList function called");
    const listBody = event.target.listInput.value;
    
    fetch("/api/lists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": document.querySelector('[name="csrf-token"]').content
      },
      body: JSON.stringify({ list: { body: listBody } }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLists([...lists, data]);
        alert("List created successfully");
        event.target.reset();
      })
      .catch((error) => console.log(error));
  };  

  return (
    <>
      <h3 className="m-4">Lists:</h3>
      <div>
        <div className="m-4">
        <form onSubmit={CreateList(event)}>
          <label htmlFor="listInput">Add new list:</label>
          <input 
            type="text" 
            id="listInput"
            name="listInput"
            className="m-1"
          />
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
        </div>
        <div className="m-4">
          {lists.map((list) => (
            <div key={list.id} className="p-4 bg-white rounded-lg shadow-md mb-4 relative">
              <div className="flex justify-between items-center">
                <p>{list.body}</p>
                <button 
                  onClick={() => DeleteList(list.id)} 
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <i className="bi bi-trash-fill text-xl"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default List;

