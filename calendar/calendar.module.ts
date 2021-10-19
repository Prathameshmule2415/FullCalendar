import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../share.module';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

import interactionPlugin from '@fullcalendar/interaction';
import timeGrigPlugin from '@fullcalendar/timegrid';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
    dayGridPlugin,
    timeGrigPlugin,
    interactionPlugin
  ]);


@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CalendarRoutingModule,
    SharedModule,
    CommonModule,
    FullCalendarModule,
    MatNativeDateModule,
    MatMomentDateModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-ES'},
  ]
})
export class CalendarModule { }
