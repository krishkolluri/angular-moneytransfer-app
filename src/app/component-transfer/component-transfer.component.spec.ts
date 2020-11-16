import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTransferComponent } from './component-transfer.component';

describe('ComponentTransferComponent', () => {
  let component: ComponentTransferComponent;
  let fixture: ComponentFixture<ComponentTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
