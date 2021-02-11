import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonsService } from 'src/app/services/persons.service';
import { Persons, ResponsePersons } from '../intefaces/persons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styles: [
  ]
})
export class PersonsComponent implements OnInit {

  persons: Persons[] = [];

  constructor(public personService: PersonsService, private router: Router) { }

  ngOnInit(): void {
    this.personService.getPersons()
      .subscribe((res: any) => {
        this.persons.push(...res);
      });
  }

  viewPerson(person: any) {
    this.personService.personSel = person;
    this.router.navigateByUrl('viewPerson');
  }

  goCreatePerson() {
    this.router.navigateByUrl('/createPerson');
  }

  updateProcessing(person: any) {
    this.personService.personSel = person;
    this.personService.personSel.processing = 'true';
    this.personService.updateProcessing(this.personService.personSel);
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 2000
    });
    Toast.fire({
      title: 'Person updated!',
      background: 'yellow'
    });
    this.router.navigateByUrl('viewPerson');
  }

}
