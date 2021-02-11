
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Persons, ResponsePersons } from '../components/intefaces/persons';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  personSel: any;

  constructor(private http: HttpClient, private router: Router) { }

  getPersons() {
    return this.http.get(`${URL}/persons`);
  }

  updateProcessing(person: any) {

    this.personSel = person;

    const headers = {
    };

    const data = {
    };
    return this.http.put<ResponsePersons>(`${URL}/updatePerson`, this.personSel, {headers}).subscribe(() => {
      this.router.navigateByUrl('/homepage', { skipLocationChange: true })
        .then(() => this.router.navigate(['persons']));
    });
  }

  createPerson(
    name: string,
    lastName: string,
    processing: string,
    creationDate: Date) {

    const headers = {
    };

    const data = {
        name,
        lastName,
        processing,
        creationDate
    };

    console.log(data);

    return this.http.post<ResponsePersons>(`${URL}/person`, data, { headers }).subscribe(() => {
      this.router.navigateByUrl('/homepage', { skipLocationChange: true })
        .then(() => this.router.navigate(['persons']));
    });
    
  }
}
