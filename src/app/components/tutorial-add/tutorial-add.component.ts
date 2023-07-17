import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Gender, Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'tutorial-add',
  templateUrl: './tutorial-add.component.html',
  styleUrls: ['./tutorial-add.component.scss'],
})
export class TutorialAddComponent {
  tutorial: Tutorial = {
    studentName: '',
    studentGender: Gender.Male,
    studentTitle: '',
    studentDescription: '',
  };
  genderlist = [
    { id: Gender.Male, name: 'Male' },
    { id: Gender.Female, name: 'Female' },
  ];
  genderObj: any;
  submitted: boolean = false;

  constructor(
    private tutorialService: TutorialService,
    private router: Router
  ) {
    console.log(tutorialService);
    console.log(router);
  }

  saveTutorial(): void {
    const data = {
      studentName: this.tutorial.studentName,
      studentGender: this.tutorial.studentGender,
      studentTitle: this.tutorial.studentTitle,
      studentDescription: this.tutorial.studentDescription,
    };

    this.tutorialService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.log(e),
    });
    // this.router.navigate(['/tutorials']);
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      studentName: '',
      studentGender: Gender.Male,
      studentTitle: '',
      studentDescription: '',
    };
    this.genderlist = [
      { id: Gender.Male, name: 'Male' },
      { id: Gender.Female, name: 'Female' },
    ];
  }

  getSelectedGender(): void {
    console.log(this.tutorial.studentGender);
  }
}
