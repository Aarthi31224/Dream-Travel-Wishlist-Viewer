import React, { useState } from "react";
function Cards({ user, setPage }) {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem(user)) || []
  );

  // Delete a card
  const remove = (i) => {
    const newData = [...data];
    newData.splice(i, 1);
    localStorage.setItem(user, JSON.stringify(newData));
    setData(newData);
  };

  // Toggle visited status
  const toggleVisited = (i, status) => {
    const newData = [...data];
    newData[i].visited = status;
    localStorage.setItem(user, JSON.stringify(newData));
    setData(newData);
  };

  return (
    <div className="card-page"> 

    <div className="box3">

      <h2>Destination Cards</h2>
      <button className="back-btn" onClick={() => setPage("form")}>Back</button>

      <div className="cards-container-vertical">
        {data.length === 0 && <p>No destinations added yet.</p>}

        {data.map((d, i) => (
          <div className="card" key={i}>
            <h3><strong>place:</strong> {d.place}</h3>
            <p><strong>State:</strong> {d.state}</p>
            <p><strong>District:</strong> {d.district}</p>
            <p><strong>map link:</strong> <span style={{color:"blue"}}>{d.map}</span></p>
            
            <p><strong>About Destination:</strong> {d.destination}</p>

            {/* Visited / Not Visited Buttons */}
            <div className="status-buttons">
              <button
                className={`status-btn ${d.visited === true ? "visited" : ""}`}
                onClick={() => toggleVisited(i, true)}>Visited</button>

              <button className={`status-btn ${d.visited === false ? "not-visited" : ""}`}
                onClick={() => toggleVisited(i, false)}>Not Visited</button>
            </div>

           
          <button className="delete-btn" onClick={() => remove(i)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Cards;{
  
}
