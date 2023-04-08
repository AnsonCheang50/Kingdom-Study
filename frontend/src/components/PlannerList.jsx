import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

//Will need to be deleted and remake
function PlannerList() {

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let presentDate = `${month}-${day}-${year}`;
console.log(presentDate);
const schedulerData = [
  { startDate: '2023-04-07T10:07', endDate: '2023-04-07T10:37', title: 'Meeting' },
];
//This CurrentDate is set the the presentDate so we are always on todays date
const currentDate = presentDate;
const handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const title = formData.get('title');
  const date = formData.get('date');
  const time = formData.get('time');
  const endTime = formData.get('EndTime');
  console.log(date);
  console.log(time);
  console.log(endTime);
  const newSchedulerItem = {
    startDate: date + "T" + time,
    //endDate: date + "T" + endTime,
    // title: title,
  };
  // Add the new object to the schedulerData array
  schedulerData.push(newSchedulerItem);
  console.log(schedulerData);
};
  return (
    <div>
    <Paper>
    <Scheduler
      data={schedulerData}
    >
      <ViewState
        currentDate={currentDate}
      />
      <DayView
        startDayHour={9}
        endDayHour={14}
      />
      <Appointments />
    </Scheduler>
  </Paper>
    <div>
    <h1>My Form</h1>
    <Form onSubmit={handleSubmit}/>
  </div>
</div>
  );
}

function Form(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" name="title"/><br/><br/>
  
      <label htmlFor="date">Date:</label>
      <input type="date" id="date" name="date"/><br/><br/>

      <label htmlFor="time">Time:</label>
      <input type="time" id="time" name="time"/><br/><br/>
     
      <label htmlFor="EndTime">EndTime:</label>
      <input type="time" id="EndTime" name="EndTime"/><br/><br/>
     
      <input type="submit" value="Submit"/>
    </form>
  );
}
export default PlannerList;
