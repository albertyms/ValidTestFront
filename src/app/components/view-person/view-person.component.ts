import { Component, OnInit } from '@angular/core';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.component.html',
  styles: [
  ]
})
export class ViewPersonComponent implements OnInit {

  constructor(public personService: PersonsService) { }

  ngOnInit(): void {
  }

  back() {
    window.history.back();
  }

}
