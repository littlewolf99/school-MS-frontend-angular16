import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
 describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
   beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    }).compileComponents();
  });
   beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
   it('should create the app', () => {
    expect(component).toBeTruthy();
  });
   it('should navigate to "tutorials" when "Tutorials" link is clicked', () => {
    const tutorialsLink = fixture.nativeElement.querySelector('a[href="/tutorials"]');
    tutorialsLink.click();
    fixture.detectChanges();
    expect(component.getCurrentRoute()).toBe('tutorials');
  });
   it('should navigate to "addtutorial" when "Add" link is clicked', () => {
    const addTutorialLink = fixture.nativeElement.querySelector('a[href="/addtutorial"]');
    addTutorialLink.click();
    fixture.detectChanges();
    expect(component.getCurrentRoute()).toBe('addtutorial');
  });
});
In the above example, we are testing the following scenarios: 
 1. The component should be created successfully. 
2. Clicking on the "Tutorials" link should navigate to the "tutorials" route. 
3. Clicking on the "Add" link should navigate to the "addtutorial" route. 
 These test cases cover positive scenarios where the expected behavior is met. To test negative scenarios, you could modify the test cases to simulate incorrect navigation or invalid routes and ensure that the component behaves as expected. 
 Additionally, you could also write test cases to validate the scalability, efficiency, and maintainability of the code. For example, you could test the performance of the navigation by simulating multiple clicks and measuring the time taken. 
 It is also important to test the compatibility of the code with different platforms and operating systems. This can be achieved by running the tests on different environments and ensuring consistent behavior. 
 Overall, the unit test cases should cover a range of scenarios to ensure that the code is functioning correctly and meets the desired requirements.
Question :

Generate unit test case for this code:
tutorial-add.component.ts
 #1-69 
Answer :

Share icon
The best framework to use for writing unit test cases in Angular is Jasmine, which is the default testing framework for Angular applications. 
 Here is an example of unit test code for the functions in the given component:
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TutorialAddComponent } from './tutorial-add.component';
import { TutorialService } from 'src/app/services/tutorial.service';
import { of } from 'rxjs';
 describe('TutorialAddComponent', () => {
  let component: TutorialAddComponent;
  let fixture: ComponentFixture<TutorialAddComponent>;
  let tutorialService: jasmine.SpyObj<TutorialService>;
   beforeEach(async () => {
    tutorialService = jasmine.createSpyObj('TutorialService', ['create']);
     await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TutorialAddComponent],
      providers: [{ provide: TutorialService, useValue: tutorialService }],
    }).compileComponents();
  });
   beforeEach(() => {
    fixture = TestBed.createComponent(TutorialAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
   it('should create', () => {
    expect(component).toBeTruthy();
  });
   it('should save tutorial', () => {
    const tutorialData = {
      studentName: 'John Doe',
      studentGender: Gender.Male,
      studentTitle: 'Angular Testing',
      studentDescription: 'Unit testing with Jasmine',
    };
    tutorialService.create.and.returnValue(of({}));
     component.tutorial = tutorialData;
    component.saveTutorial();
     expect(tutorialService.create).toHaveBeenCalledWith(tutorialData);
    expect(component.submitted).toBeTrue();
  });
   it('should reset tutorial', () => {
    component.submitted = true;
    component.tutorial = {
      studentName: 'John Doe',
      studentGender: Gender.Male,
      studentTitle: 'Angular Testing',
      studentDescription: 'Unit testing with Jasmine',
    };
     component.newTutorial();
     expect(component.submitted).toBeFalse();
    expect(component.tutorial.studentName).toBe('');
    expect(component.tutorial.studentGender).toBe(Gender.Male);
    expect(component.tutorial.studentTitle).toBe('');
    expect(component.tutorial.studentDescription).toBe('');
    expect(component.genderlist).toEqual([
      { id: Gender.Male, name: 'Male' },
      { id: Gender.Female, name: 'Female' },
    ]);
  });
   it('should get selected gender', () => {
    spyOn(console, 'log');
     component.tutorial.studentGender = Gender.Male;
    component.getSelectedGender();
     expect(console.log).toHaveBeenCalledWith(Gender.Male);
  });
});