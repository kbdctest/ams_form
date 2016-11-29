import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>AMS Crud Fields</h1>
    <div>
      <label>Edit Del</label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
    <div>
      <label>Edit Del</label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
    <div>
      <label>Edit Del</label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
       
     
    
    `
})
export class AppComponent {
  title = 'Our First Crud';
  FieldOne: FieldOne = {
    id: 1,
    name: 'This is the field'
  };
}

 