import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model'
import { TaskService } from '../task.service';


@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  //@Output() add = new EventEmitter<NewTaskData>();
  enteredTitle= '';
  enteredSummary='';
  enteredDate='';

//  // drugi nacin da se uradi isto posao samo pomocu signala
//   enteredTitle = signal('');
//   enteredSummary = signal('');
//   enteredDate = signal('');
  private taskService = inject(TaskService);

  onCloseButton(){
    this.close.emit()
  }
  
  onSubimt(){
    //  this.add.emit({
    //   title: this.enteredTitle,
    //   summary: this.enteredSummary,
    //   dueDate: this.enteredDate
    //  })
    this.taskService.addTask({
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate
    },this.userId);
    this.close.emit();
  }
} 
