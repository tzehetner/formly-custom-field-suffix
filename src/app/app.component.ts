import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FormlyTest';
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'custom-field',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    }
  ];

  onSubmit(model: any) {
    console.log(model);
  }
}
