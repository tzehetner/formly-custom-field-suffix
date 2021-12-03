import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/material';

@Component({
  selector: 'app-custom-field',
  templateUrl: './custom-field.component.html',
  styleUrls: ['./custom-field.component.scss']
})
export class CustomFieldComponent extends FieldType {}
