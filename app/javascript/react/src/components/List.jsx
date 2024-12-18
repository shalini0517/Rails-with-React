import * as React from 'react';
import { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom/client';

const Home = (props) => {
  const [lists, setLists] = useState([])

  useEffect(() => {
    fetch("/api/lists")
      .then((response) => response.json())
      .then((data) => setLists(data));
  }, []);

  return (
    <>
      <h3 className="m-4">Lists:</h3>
      <div>
        <div className="m-4">
          <form>
            <label>Add new list:</label>
            <input type="text" className="m-1"></input>
            <button type="submit" className="btn btn-primary">Add</button>
          </form>
        </div>
        <div className="m-4">
          {lists.map((list) => (
            <div key={list.id} className="p-4 bg-white rounded-lg shadow-md mb-4">
              <p>{list.body}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

