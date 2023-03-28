import { useState } from 'react';
//Will need to be deleted and remake
function PlannerList(props) {

  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${task}`);
  }
  return (
  <form onSubmit={handleSubmit}>
    <label>
      <input 
        type="text" 
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
    </label>
    <input type="submit" />
  </form>
  );
}

export default PlannerList;