import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

// import { createPlan } from '../features/Auth/planService';

function PlannerList() {
	const date = new Date();

	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();
	let presentDate = `${month}-${day}-${year}`;

	const [schedulerData, setSchedulerData] = useState([]);

	const currentDate = presentDate;

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const title = formData.get('title');
		const date = formData.get('date');
		const time = formData.get('time');
		const endTime = formData.get('EndTime');
		const newSchedulerItem = {
			startDate: date + 'T' + time,
			endDate: date + 'T' + endTime,
			title: title,
		};
		setSchedulerData([...schedulerData, newSchedulerItem]);
		console.log(schedulerData);
	};

	return (
		<div style={{ display: 'flex' }}>
			<div style={{ flex: 0.25, paddingRight: '1rem' }}>
				<Form handleSubmit={handleSubmit} />
			</div>
			<div style={{ flex: 1, paddingLeft: '1rem' }}>
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
			</div>
		</div>
	);
}

function Form({ handleSubmit }) {
	const URL = '';

	const [title, setTitle] = useState('');
	const [date, setDate] = useState(null);
	const [startTime, setStartTime] = useState(null);
	const [endTime, setEndTime] = useState(null);
	const [popUp, setPopUp] = useState(false);

	// const handleSubmit = (e) => {
	//     e.preventDefault();

	//     const formData = {
	//         title,
	//         date,
	//         startTime,
	//         endTime,
	//     };
	//     //console.log(JSON.stringify(formData));
	//     const response = createPlan(formData);
	//     console.log(response);
	// };

	return (
		<>
			<form className="plan-form" onSubmit={handleSubmit}>
				<label htmlFor="title">Title:</label>
				<input
					type="text"
					id="title"
					name="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				<label htmlFor="date">Date:</label>
				<input
					type="date"
					id="date"
					name="date"
					onSelect={(e) => setDate(e.target.value)}
				/>

				<label htmlFor="time">Time:</label>
				<input
					type="time"
					id="time"
					name="time"
					onSelect={(e) => setStartTime(e.target.value)}
				/>

				<label htmlFor="EndTime">EndTime:</label>
				<input
					type="time"
					id="EndTime"
					name="EndTime"
					onSelect={(e) => setEndTime(e.target.value)}
				/>
				<br />

				<input
					type="submit"
					value="Submit"
					onClick={() => {
						setPopUp(true);
					}}
					//disabled={validFormData ? 'false' : true}
				/>
			</form>
			{popUp && <PopUpWindow title={title} />}
		</>
	);
}

const PopUpWindow = ({ title }) => {
    const navigate = useNavigate();

	const handlePopUpClick = () => {
		console.log('hi');
        navigate('/game');
	};

	return (
		<div className="pop-up">
			<h1>{title}</h1>
			<button onClick={handlePopUpClick}>Start Task</button>
		</div>
	);
};

export default PlannerList;
