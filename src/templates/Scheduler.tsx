import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Appointments,
  DateNavigator,
  MonthView,
  Scheduler,
  Toolbar,
  ViewSwitcher,
  WeekView,
} from '@devexpress/dx-react-scheduler-material-ui';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';

import type { Event } from './eventsData';
import { events as eventData } from './eventsData';

// Create a custom appointment component
const Appointment: React.FC<any> = ({ children, style, ...restProps }) => (
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

const toISOString = (date?: Date) => (date ? date.toISOString() : '');

const mapEventsToSchedulerData = (events: Event[]) => {
  return events.map((event) => ({
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
        <Scheduler data={schedulerData}>
          <ViewState
            currentDate={currentDate}
            onCurrentDateChange={(newDate) => setCurrentDate(newDate)}
          />
          <MonthView />
          <WeekView startDayHour={9} endDayHour={19} />
          <Toolbar />
          <DateNavigator />
          <ViewSwitcher />
          {/* Use the custom appointment component */}
          <Appointments appointmentComponent={Appointment} />
        </Scheduler>
      </Paper>
    </ThemeProvider>
  );
};

export default EventScheduler;
