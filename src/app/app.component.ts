import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
import { ChistmasTreeOrderComponent } from './chistmas-tree-order/chistmas-tree-order.component';

Amplify.configure(outputs);

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, ChistmasTreeOrderComponent],
})
export class AppComponent {
  title = 'amplify-angular-template';
}
