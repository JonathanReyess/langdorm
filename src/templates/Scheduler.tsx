import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import {
  Scheduler,
  WeekView,
  MonthView,
  Appointments,
  Toolbar,
  DateNavigator,
  ViewSwitcher,
  AppointmentProps,
} from '@devexpress/dx-react-scheduler-material-ui';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { events as eventData, Event } from '../templates/eventsData';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create a custom appointment component with proper typing
const Appointment: React.FC<AppointmentProps> = ({
  children, style, ...restProps
}) => (
  <Appointments.Appointment
    {...restProps}
    style={{
      ...style,
      backgroundColor: '#c4b5fd',
      borderRadius: '8px',
    }}
  >
    {children}
  </Appointments.Appointment>
);

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#c4b5fd',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#c4b5fd',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const toISOString = (date?: Date) => date ? date.toISOString() : '';

const mapEventsToSchedulerData = (events: Event[]) => {
  return events.map(event => ({
    title: event.name,
    startDate: toISOString(event.startDate),
    endDate: toISOString(event.endDate),
  }));
};

const EventScheduler: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const schedulerData = mapEventsToSchedulerData(eventData);

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Scheduler data={schedulerData} >
          <ViewState currentDate={currentDate} onCurrentDateChange={(newDate) => setCurrentDate(newDate)} />
          <MonthView />
          <WeekView startDayHour={9} endDayHour={19} />
          <Toolbar />
          <DateNavigator />
          <ViewSwitcher />
          {/* Use the custom appointment component */}
          <Appointments appointmentComponent={Appointment}/>
        </Scheduler>
      </Paper>
    </ThemeProvider>
  );
};

export default EventScheduler;
