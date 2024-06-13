import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChistmasTreeOrderComponent } from './chistmas-tree-order.component';

describe('ChistmasTreeOrderComponent', () => {
  let component: ChistmasTreeOrderComponent;
  let fixture: ComponentFixture<ChistmasTreeOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChistmasTreeOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChistmasTreeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
