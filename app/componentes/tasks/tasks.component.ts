import { Component, OnInit } from '@angular/core';
import { variableBD } from 'src/app/mock-tasks';
import { nombre_Interface } from 'src/app/TASKS';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  listaTareas:nombre_Interface[]=variableBD;

  constructor() { }

  ngOnInit(): void {
  }

}
