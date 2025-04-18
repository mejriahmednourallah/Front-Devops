import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Etudiant {
  nomEt: string;
  prenomEt: string;
  cin: string;
  ecole: string;
}

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private apiUrl = '/foyer/etudiant';

  constructor(private http: HttpClient) {}

  addEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(`${this.apiUrl}/add-etudiant`, etudiant);
  }

  getEtudiants(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(`${this.apiUrl}/retrieve-all-etudiants`);
  }
}
