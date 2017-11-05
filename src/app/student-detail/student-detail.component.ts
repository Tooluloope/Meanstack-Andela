import {Component, Input, OnInit, OnChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit, OnChanges {
  @Input() student;
  @Output() UpdateStudentEvent = new EventEmitter();
  @Output() DeleteStudentEvent = new EventEmitter();
  private editTitle = false;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.editTitle = false;
  }
  onTitleClick() {
    this.editTitle = true;
  }
  updateStudent() {
    this.UpdateStudentEvent.emit(this.student);
  }
  deleteStudent() {
    this.DeleteStudentEvent.emit(this.student);
  }

}
