import { Component, OnInit } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatStepperModule} from '@angular/material/stepper'
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {AsyncPipe, CommonModule} from '@angular/common';
import { CodeInputModule } from 'angular-code-input';
import {A11yModule} from '@angular/cdk/a11y'

@Component({
  selector: 'app-chistmas-tree-order',
  standalone: true,
  imports: [A11yModule, CommonModule, MatAutocompleteModule, ReactiveFormsModule, FormsModule, AsyncPipe, CodeInputModule, MatInputModule, MatFormFieldModule, MatStepperModule],
  templateUrl: './chistmas-tree-order.component.html',
  styleUrl: './chistmas-tree-order.component.css'
})
export class ChistmasTreeOrderComponent {
  postcodeControl = new FormControl('')
  houseControl = new FormControl('')

  showHouseInput = false

  constructor() {
    this.postcodeControl.valueChanges.subscribe(
      (value) => {
        this.showHouseInput = value?.length == 5
        if (this.showHouseInput) {

        }
      }
    )
  }
}
