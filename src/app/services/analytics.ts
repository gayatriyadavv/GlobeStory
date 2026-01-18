import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Trip {
  id?: number;
  destination: string;
  cost: number;
  happiness: number;
  type: string;
}

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private apiUrl = 'http://localhost:3000/api/analytics';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiUrl);
  }

  create(trip: Trip) {
    return this.http.post(this.apiUrl, trip);
  }

  update(id: number, trip: Partial<Trip>) {
    return this.http.put(`${this.apiUrl}/${id}`, trip);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

