import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibDesignTestComponent } from './lib-design-test.component';

describe('LibDesignTestComponent', () => {
  let component: LibDesignTestComponent;
  let fixture: ComponentFixture<LibDesignTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibDesignTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibDesignTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
