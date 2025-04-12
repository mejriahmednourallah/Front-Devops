import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EtudiantService, Etudiant } from '../../services/etudiant.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-etudiant',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css'],
  providers: [HttpClientModule]
})
export class EtudiantComponent {
  form: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  students: Etudiant[] = [];           // Array to store the list of students
  isListLoaded: boolean = false;       // Flag to control when to display the list
  listErrorMessage: string | null = null; // Error message for fetching students

  constructor(private fb: FormBuilder, private etudiantService: EtudiantService) {
    this.form = this.fb.group({
      nomEt: ['', Validators.required],
      prenomEt: ['', Validators.required],
      cin: ['', Validators.required],
      ecole: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      const etudiant: Etudiant = this.form.value;
      this.etudiantService.addEtudiant(etudiant).subscribe({
        next: (res) => {
          console.log('Étudiant ajouté:', res);
          this.form.reset();
          this.successMessage = 'Étudiant ajouté avec succès';
          this.errorMessage = null;
          this.getAllStudents(); // Automatically refresh the student list after adding
          setTimeout(() => this.successMessage = null, 3000);
        },
        error: (err) => {
          console.error('Erreur:', err);
          this.errorMessage = 'Erreur lors de l\'ajout de l\'étudiant';
          this.successMessage = null;
        }
      });
    }
  }

  getAllStudents() {
    this.etudiantService.getEtudiants().subscribe({
      next: (data) => {
        this.students = data;
        this.listErrorMessage = null;
        this.isListLoaded = true;
      },
      error: (err) => {
        console.error('Erreur:', err);
        this.listErrorMessage = 'Erreur lors de la récupération des étudiants';
        this.isListLoaded = true;
      }
    });
  }
}