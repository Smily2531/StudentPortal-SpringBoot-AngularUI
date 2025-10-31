import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Student {
  id: number;
  name: string;
  branch: string;
  city: string;
  marks: number;
}

@Injectable({
  providedIn: 'root',
})
export class CseapiserviceService {
  private apiUrl = 'http://localhost:8084/api/getall';

  constructor(private http: HttpClient) {}

  getAllData(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }
}
