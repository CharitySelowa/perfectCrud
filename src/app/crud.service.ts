import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }
  //get function
  getTodolist(){
    return this.http.get("http://localhost:5050/api/gettodolist")
  }
}
