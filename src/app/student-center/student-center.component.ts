import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-student-center',
  templateUrl: './student-center.component.html',
  styleUrls: ['./student-center.component.css']
})
export class StudentCenterComponent implements OnInit {
  students: Array<Student>;

  selectedStudent: Student;
  private hidenewStudent = true;
  constructor(private studService: StudentService) { }

  ngOnInit() {
   this.studService.getStudents()
     .subscribe(studData => this.students = studData);
  }
  onSelectStudent(student: any) {
    this.selectedStudent = student;
    this.hidenewStudent = true;
    console.log(this.selectedStudent);
  }
  onSubmitAddStudent(student: Student) {
    this.studService.addStudent(student)
      .subscribe(newStud => {
        this.students.push(newStud);
        this.hidenewStudent = true;
        this.selectedStudent = newStud;
      });
  }

  onUpdateStudentEvent(student: any) {
    this.studService.updateStudent(student)
      .subscribe(UpdatedStudent => student = UpdatedStudent);
    this.selectedStudent = null;
  }

  onDeleteStudentEvent(student: any) {
    const studentArray = this.students;
    this.studService.deleteStudent(student)
      .subscribe(DeletedStud => {
        for (let i = 0; i < studentArray.length; i++) {
          if (studentArray[i]._id === student._id) {
            studentArray.splice(i, 1);
          }
        }
      });
    this.selectedStudent = null;
  }
  newStudent() {
    this.hidenewStudent = false;
  }
}
