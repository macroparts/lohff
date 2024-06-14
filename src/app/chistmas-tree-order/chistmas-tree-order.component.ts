import { Component } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatStepperModule} from '@angular/material/stepper'
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AsyncPipe, CommonModule} from '@angular/common';
import { CodeInputModule } from 'angular-code-input';
import {A11yModule} from '@angular/cdk/a11y'
import {generateClient} from 'aws-amplify/data'
import {Schema} from '../../../amplify/data/resource'
import {map, Observable, startWith} from 'rxjs'

const client = generateClient<Schema>();


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

  formState: 'POSTCODE_ONLY' | 'POSTCODE_VERIFICATION' | 'POSTCODE_INVALID' | 'POSTCODE_VALID' = 'POSTCODE_ONLY'

  showHouseInput = false
  houses: Array<Schema['Address']['type']> = []
  filteredOptions: Observable<Array<Schema['Address']['type']>>;

  constructor() {
    this.filteredOptions = this.houseControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

    this.postcodeControl.valueChanges.subscribe(
      (value) => {
        if (value?.length == 5) {
          this.formState = 'POSTCODE_VERIFICATION'
          client.models.Address.list({
            limit: 10000,
            filter: {
              postcode: {
                eq: value
              }
            }
          }).then((value) => {
            this.houses = value.data
            this.formState = value.data.length ? 'POSTCODE_VALID' : 'POSTCODE_INVALID'
          }).catch(console.log)
        } else {
          this.formState = 'POSTCODE_ONLY'
        }
      }
    )
  }

  private _filter(value: string): Array<Schema['Address']['type']> {
    const filterValue = value.toLowerCase()

    return this.houses.filter(
      option => (option.street + ' ' + option.housenumber).toLowerCase().includes(filterValue)
    )
  }
}
