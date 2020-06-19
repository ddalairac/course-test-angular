import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
  })
export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  private _url = "http://jsonplaceholder.typicode.com/users";
  add(todo) {
    return this.http.post(this._url, todo)
  }

  getAll() { 
    return this.http.get<any[]>(this._url)
  }

  getAllPromise() {
    return this.http.get(this._url).toPromise();
  }

  delete(id) {
    return this.http.delete(`${this._url}/${id}`);
  }
  
}