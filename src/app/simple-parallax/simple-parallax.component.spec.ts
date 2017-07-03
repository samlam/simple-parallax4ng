import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleParallaxComponent } from './simple-parallax.component';

describe('SimpleParallaxComponent', () => {
  let component: SimpleParallaxComponent;
  let fixture: ComponentFixture<SimpleParallaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleParallaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
