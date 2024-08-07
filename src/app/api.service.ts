import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7089/api'; // Base URL of your API

  constructor(private http: HttpClient) {}

  // Example GET method to get candidates
  getCandidates(): Observable<any> {
    return this.http.get(`${this.apiUrl}/candidates`);
  }

  // Example POST method to add a candidate
  addCandidate(candidate: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/candidates`, candidate, { headers });
  }
}
