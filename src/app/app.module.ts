import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomFieldComponent } from './custom-field/custom-field.component';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    CustomFieldComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    FormlyModule.forRoot({
      types: [
        {
          name: "custom-field",
          component: CustomFieldComponent,
          wrappers: ["form-field"],
          defaultOptions: {
            templateOptions: {
              readonly: true,
            },
          },
        },
      ]
    }),
    FormlyMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
