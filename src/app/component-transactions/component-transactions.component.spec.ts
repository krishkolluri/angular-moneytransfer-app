import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTransactionsComponent } from './component-transactions.component';

describe('ComponentTransactionsComponent', () => {
  let component: ComponentTransactionsComponent;
  let fixture: ComponentFixture<ComponentTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
