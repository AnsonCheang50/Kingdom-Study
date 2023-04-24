import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  WeekView,
  Appointments,
  Toolbar,
  ViewSwitcher,
  MonthView,
  AppointmentTooltip,
} from '@devexpress/dx-react-scheduler-material-ui';

function PlannerList() {

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let presentDate = `${month}-${day}-${year}`;

  const [schedulerData, setSchedulerData] = useState([
  ]);

	const currentDate = presentDate;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get('title');
    const date = formData.get('date');
    const time = formData.get('time');
    const endTime = formData.get('EndTime');
    const newSchedulerItem = {
      startDate: date + "T" + time,
      endDate: date + "T" + endTime,
      title: title,
    };
    setSchedulerData([...schedulerData, newSchedulerItem]);
    console.log(schedulerData);
  };
  return (
    <div>
      <Paper>
        <Scheduler data={schedulerData} height={660}>
          <ViewState currentDate={currentDate} />
            <DayView startDayHour={0} endDayHour={24} />
            <WeekView startDayHour={0} endDayHour={24} />
            <MonthView startDayHour={0} endDayHour={24} />
            <Toolbar />
          <ViewSwitcher />
          <Appointments />
          <AppointmentTooltip
            showDeleteButton
            showCloseButton
            showOpenButton
          />
        </Scheduler>
      </Paper>
      <div>
        <h1>My Form</h1>
        <Form onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

function Form(props) {
	return (
		<form className="plan-form" onSubmit={props.onSubmit}>
			<label htmlFor="title">Title:</label>
			<input type="text" id="title" name="title" />
			<br />
			<br />

			<label htmlFor="date">Date:</label>
			<input type="date" id="date" name="date" />
			<br />
			<br />

			<label htmlFor="time">Time:</label>
			<input type="time" id="time" name="time" />
			<br />
			<br />

			<label htmlFor="EndTime">EndTime:</label>
			<input type="time" id="EndTime" name="EndTime" />
			<br />
			<br />

			<input type="submit" value="Submit" />
		</form>
	);
}

export default PlannerList;
