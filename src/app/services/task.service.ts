import { Injectable } from '@angular/core';
import { task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  private tasks: Array<task>=[];

  gettasks():Array<task>{
    return this.tasks;
  }
  getyid(id:number):task | undefined{
     const task= this.tasks.find(c=> c.id ===id);
     return task;
  }
  addtask(task:task):void{
    this.tasks.push(task);
    this.saveLocalStrorage();
  }
  updatetask(task:task){
    this.saveLocalStrorage();
  }
  removetask(task:task){
       const index= this.tasks.indexOf(task);

       if(index ! ==1){
        this.tasks.splice(index,1)
       }
  }
   private saveLocalStrorage(){
      const taskJson =JSON.stringify(this.tasks);
      localStorage.setItem('tasks', taskJson);
   }
   private getfromlocalstorage():Array<task>{
     const taskJson =localStorage.getItem('tasks');

     if(!taskJson){
      // não achou

      return new Array<task>();
     }
     return JSON.parse(taskJson)
   }
}
