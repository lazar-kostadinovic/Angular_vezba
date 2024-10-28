import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NewTaskData} from '../task/task.model'


@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle= '';
  enteredSummary='';
  enteredDate='';

//  // drugi nacin da se uradi isto posao samo pomocu signala
//   enteredTitle = signal('');
//   enteredSummary = signal('');
//   enteredDate = signal('');


  onCloseButton(){
    this.cancel.emit()
  }
  onSubimt(){
     this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
     })
  }
} 
