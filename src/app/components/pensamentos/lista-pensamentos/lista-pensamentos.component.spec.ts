import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPensamentosComponent } from './lista-pensamentos.component';

describe('ListaPensamentosComponent', () => {
  let component: ListaPensamentosComponent;
  let fixture: ComponentFixture<ListaPensamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPensamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPensamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
