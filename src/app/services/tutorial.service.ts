import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseurl = 'http://localhost:5090/api/student';

@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${baseurl}`);
  }

  get(id: Number): Observable<Tutorial> {
    return this.http.get<Tutorial>(`${baseurl}/${id}`);
  }

  create(data: Tutorial): Observable<Tutorial> {
    return this.http.post<Tutorial>(baseurl, data);
  }

  update(id: Number, data: Tutorial): Observable<Tutorial> {
    return this.http.put<Tutorial>(`${baseurl}/${id}`, data);
  }

  delete(id: Number): Observable<Tutorial> {
    return this.http.delete<Tutorial>(`${baseurl}/${id}`);
  }

  deleteAll(): Observable<Tutorial> {
    return this.http.delete<Tutorial>(baseurl);
  }

  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${baseurl}/Search?title=${title}`);
  }
}
