import { Component, computed, EventEmitter, input, Input, output, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
// export class UserComponent {
 
//   get imagePath () {
//     return 'assets/users/' +this.selectedUser.avatar;
//   } 
//   imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

//   onSelectUser()
//   {
//     const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);
//     this.selectedUser.set(DUMMY_USERS[randomIndex])
//     //this.selectedUser =  DUMMY_USERS[randomIndex];
//   }
// }
//ovako radimo sa signalima
// avatar = input.required<string>();
// name = input.required<string>();

// imagePath = computed(() =>{
//   return 'assets/users/' + this.avatar();
// });
export class UserComponent{
// @Input({required: true}) id!: string ;
// @Input({required: true}) avatar!: string ;
// @Input({required: true}) name!: string;
@Input({required: true})user!: User;
@Input({required: true}) selected!:boolean;
@Output() select = new EventEmitter<string>();
//select = output<string> ();
 get imagePath(){
  return 'assets/users/' + this.user.avatar;
 }
  onSelectUser(){
    this.select.emit(this.user.id);
    console.log(DUMMY_USERS.find(user => user.id === this.user.id));
  }
}