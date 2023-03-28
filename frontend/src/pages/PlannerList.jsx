import React from 'react';

const PlannerList = () => {

  return (
    <div>
    <div id="myDIV" class="header">
  <h2>My To Do List</h2>
  <input type="text" id="myInput" placeholder="Title..."></input>
  <span onclick="newElement()" class="addBtn">Add</span>
</div>

<ul id="myUL">
</ul>
    </div>
  );
};

export default PlannerList;