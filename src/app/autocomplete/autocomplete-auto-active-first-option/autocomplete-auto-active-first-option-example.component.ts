import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete-auto-active-first-option-example',
  templateUrl: './autocomplete-auto-active-first-option-example.component.html',
  styleUrls: ['./autocomplete-auto-active-first-option-example.component.scss'],
})
export class AutocompleteAutoActiveFirstOptionExampleComponent
  implements OnInit
{
  myControl = new FormControl();
  options = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> = of([]);

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
