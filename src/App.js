import React, { useState } from "react";
import { data } from "./data";

const App = () => {
  const [people, setPeople] = useState(data);
  const [name, setName] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setPeople([...people, { id: data.id, name: name }]);
      setName("");
    }
  };

  return (
    <div>
      <div class="d-flex justify-content-center">
        <form onSubmit={handelSubmit}>
          <input
            className="my-2"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="text-center">
            <button type="submit">Add item</button>
          </div>
        </form>
      </div>
      <div class="text-center">
        {people.map((person) => {
          return (
            <div>
              <h4>{person.name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
