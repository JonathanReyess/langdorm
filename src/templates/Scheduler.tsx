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
} from '@devexpress/dx-react-scheduler-material-ui';
import { ViewState } from '@devexpress/dx-react-scheduler'; // Ensure correct import
import { events as eventData, Event } from '../templates/eventsData'; // Adjust import path as needed
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const toISOString = (date?: Date) => date ? date.toISOString() : '';

const mapEventsToSchedulerData = (events: Event[]) => {
  return events.map(event => ({
    title: event.name,
    startDate:  toISOString(event.startDate),
    endDate:  toISOString(event.endDate),
  }));
};

const EventScheduler: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const schedulerData = mapEventsToSchedulerData(eventData);

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Scheduler data={schedulerData}>
          <ViewState currentDate={currentDate} onCurrentDateChange={(newDate) => setCurrentDate(newDate)} />
          <MonthView />
          <WeekView />
          <Toolbar />
          <DateNavigator />
          <ViewSwitcher />
          <Appointments />
        </Scheduler>
      </Paper>
    </ThemeProvider>
  );
};

export default EventScheduler;
