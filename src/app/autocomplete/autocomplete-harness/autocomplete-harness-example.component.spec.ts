import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteHarnessExampleComponent } from './autocomplete-harness-example.component';

describe('AutocompleteHarnessExampleComponent', () => {
  let component: AutocompleteHarnessExampleComponent;
  let fixture: ComponentFixture<AutocompleteHarnessExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteHarnessExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteHarnessExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
