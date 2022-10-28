import { Component, OnInit,Input } from '@angular/core';
import { nombre_Interface } from 'src/app/TASKS';
import { variableBD } from 'src/app/mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  faTimes=faTimes;
  @Input() tarea:nombre_Interface=variableBD[0];
  constructor() { }

  ngOnInit(): void {
  }

}
