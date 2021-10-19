import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar.component';


const routes = [
  {
    path: '',
    component: CalendarComponent,
    data: {
      title: 'calendar'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
