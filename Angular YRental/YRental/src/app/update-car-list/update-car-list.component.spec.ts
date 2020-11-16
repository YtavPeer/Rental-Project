import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCarListComponent } from './update-car-list.component';

describe('UpdateCarListComponent', () => {
  let component: UpdateCarListComponent;
  let fixture: ComponentFixture<UpdateCarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
