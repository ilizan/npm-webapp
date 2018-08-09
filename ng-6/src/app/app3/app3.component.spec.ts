/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { App3Component } from './app3.component';

describe('App3Component', () => {
  let component: App3Component;
  let fixture: ComponentFixture<App3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
