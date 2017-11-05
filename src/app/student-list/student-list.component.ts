import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  @Input() students: Student;
  @Output() SelectedStudent = new EventEmitter<Student>();
  constructor() { }

  ngOnInit() {
  }
  onSelect(stud: Student) {
    this.SelectedStudent.emit(stud);
  }
}
