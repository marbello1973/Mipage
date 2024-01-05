
import {ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AppComponent } from './app.component';


describe('AppComponent', () => {  
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(waitForAsync( () => {
    const ActivatedRouteMock ={
      snapshot:{
        paramMap:{
          get:(param: string) => 'someValue'
        }
      }
    }
    TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        {provide: ActivatedRoute, useValue: ActivatedRouteMock}
      ]     
    }).compileComponents();     
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });
  
  it('should create the AppComponent', () => {
    expect(component).toBeDefined();    
  });  
  
});
