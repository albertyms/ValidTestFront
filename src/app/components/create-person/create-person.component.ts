import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonsService } from 'src/app/services/persons.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styles: [
  ]
})
export class CreatePersonComponent implements OnInit {

  person = {
    name: '',
    lastName: '',
    processing: "false",
    creationDate: new Date()
  }

  constructor(public personService: PersonsService, private router: Router) { }

  ngOnInit(): void {
  }

  createPerson(f: NgForm) {
    
    this.personService.createPerson(
    this.person.name,
    this.person.lastName,
    this.person.processing,
    this.person.creationDate);

    this.person = null;

    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 2000
    });
    Toast.fire({
      title: 'Person created!',
      background: 'yellow'
    });

  }

}
