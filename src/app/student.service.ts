import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Student} from './student';


@Injectable()
export class StudentService {
  private getUrl = '/api/students';
  private postUrl = '/api/student';
  private  putUrl = '/api/student/';
  private  deleteUrl = '/api/student/';
  constructor(private http: Http) { }

  getStudents() {
    return this.http.get(this.getUrl)
      .map((response: Response) => response.json());
  }

  addStudent(student: Student) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers});
    return this.http.post(this.postUrl, JSON.stringify(student), options)
      .map((response: Response) => response.json());
  }

  updateStudent(student: Student) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers});
    return this.http.put(this.putUrl + student._id, JSON.stringify(student), options)
      .map((response: Response) => response.json());
  }

  deleteStudent(stud: Student) {
    return this.http.delete(this.deleteUrl + stud._id)
      .map((response: Response) => response.json());
  }
}
