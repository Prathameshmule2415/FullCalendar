import { Component, ViewChild } from '@angular/core';
import { Calendar, CalendarOptions, EventInput, FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGrigPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  @ViewChild("fullcalendar", { static: false })
  sa: FullCalendarComponent;
  //storing the events shown in the calendar
  calendarEvents: EventInput[] = [];
  // using plugins to interact with the calendar
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  //getting the calendar api
  calendarApi: Calendar;
  constructor() { }
  selectedDate: Date | null;
  title = 'Calandar';
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
  
    dateClick: this.handleDateClick.bind(this), // bind is important!
    eventClick :this.handleAddEventClick.bind(this),
    eventDisplay:this.handleEventHint.bind(this),
  
    headerToolbar: {
      start: 'prev,today,next',
      center: 'dayGridMonth,timeGridWeek,timeGridDay,dayGridyear',
      end: 'title'
    },
    dayHeaderContent: (args) => {
    return moment(args.date).format(`ddd D`)
},
    events: [
      { title: 'event 1', date: '2021-10-21 07:00:00' },
      { title: 'event 2', date: '2021-10-22 21:00:00' }
    ],


  };
  ngAfterViewChecked() {
    this.calendarApi = this.sa.getApi();  
  }
  handleDateClick(arg) {
 //   console.log()
    alert('date click! ' + arg.dateStr)
  }
  handleAddEventClick(arg){
    console.log("addning new data")
  }
  handleEventHint(arg){
    alert('Event hint' +arg.e)
  }

  abc(event) {
    console.log(event)
    this.selectedDate = event;
    const formatSelectedDate = event.format("YYYY-MM-DD");
    this.calendarApi.gotoDate(formatSelectedDate)
    // console.log(this.sa)
  }
  
}