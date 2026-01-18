import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface JournalEntry {
  id?: number;
  city: string;
  comment?: string;
  image?: string; // base64
  date?: string;
}

@Injectable({ providedIn: 'root' })
export class JournalService {
  private apiUrl = 'http://localhost:3000/api/journal';

  constructor(private http: HttpClient) {}

  getAll(): Observable<JournalEntry[]> {
    return this.http.get<JournalEntry[]>(this.apiUrl);
  }

  create(entry: JournalEntry): Observable<JournalEntry> {
    return this.http.post<JournalEntry>(this.apiUrl, entry);
  }

  update(id: number, entry: Partial<JournalEntry>) {
    return this.http.put(`${this.apiUrl}/${id}`, entry);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

