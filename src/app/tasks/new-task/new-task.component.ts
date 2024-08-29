import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!:string;
  @Output() close =  new EventEmitter<void>()

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private tassksService = inject(TasksService);

  
   onCancel() {
     this.close.emit();
  }

  onSubmit(){
    this.tassksService.addTask({
      title:  this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId);
    this.close.emit();
  }
}