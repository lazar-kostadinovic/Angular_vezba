import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData, Task } from './task/task.model';
import { TaskService } from './task.service';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required:true}) id!:string;
  @Input({required:true}) name!:string | undefined;
  isAddingTaks=false;
  // private taskService= new TaskService(); umesto ovog pristupa koristimo dependency injection da ne bi u svakoj komponenti kreirali novu instancu klase nego da kreiramo jednu preko konstruktora
 
  // private taskService: TaskService;
  // constructor(taskService: TaskService){
  //   this.taskService=taskService;
  // }
  constructor(private taskService: TaskService){}
  
  get selectedUserTasks(){
    return this.taskService.getUserTaks(this.id);
  }

  // onCompleteTask(id:string) {
  //  this.taskService.removeTask(id);
  // }

  onStartAddTask(){
    this.isAddingTaks=true;
    //this.taskService.addTaks();
  }

  onCloseButton(){
    this.isAddingTaks=false;
  }

}
