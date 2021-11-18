import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AutocompleteRoutingModule } from './autocomplete-routing.module';
import { AutocompleteComponent } from './autocomplete.component';
import { AutocompleteHarnessExampleComponent } from './autocomplete-harness/autocomplete-harness-example.component';
import { AutocompleteSimpleExampleComponent } from './autocomplete-simple/autocomplete-simple-example.component';
import { AutocompleteAutoActiveFirstOptionExampleComponent } from './autocomplete-auto-active-first-option/autocomplete-auto-active-first-option-example.component';
import { AutocompletePlainInputExampleComponent } from './autocomplete-plain-input/autocomplete-plain-input-example.component';
import { AutocompleteOverviewExampleComponent } from './autocomplete-overview/autocomplete-overview-example.component';
import { AutocompleteOptgroupExampleComponent } from './autocomplete-optgroup/autocomplete-optgroup-example.component';
import { AutocompleteFilterExampleComponent } from './autocomplete-filter/autocomplete-filter-example.component';
import { AutocompleteDisplayExampleComponent } from './autocomplete-display/autocomplete-display-example.component';

@NgModule({
  declarations: [
    AutocompleteComponent,
    AutocompleteHarnessExampleComponent,
    AutocompleteSimpleExampleComponent,
    AutocompleteAutoActiveFirstOptionExampleComponent,
    AutocompletePlainInputExampleComponent,
    AutocompleteOverviewExampleComponent,
    AutocompleteOptgroupExampleComponent,
    AutocompleteFilterExampleComponent,
    AutocompleteDisplayExampleComponent,
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteRoutingModule,
  ],
})
export class AutocompleteModule {}
