import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gender, Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';
import { faPenClip } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-detail.component.html',
  styleUrls: ['./tutorial-detail.component.scss'],
})
export class TutorialDetailComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentTutorial: Tutorial = {
    studentTitle: '',
    studentDescription: '',
    studentName: '',
    studentGender: Gender.Male,
    published: false,
  };

  genderlist = [
    { id: Gender.Male, name: 'Male' },
    { id: Gender.Female, name: 'Female' },
  ];

  faPenClip = faPenClip;

  message = '';

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    console.log(tutorialService);
    console.log(route);
    console.log(router);
  }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params['id']);
    }
  }

  getTutorial(id: number): void {
    this.tutorialService.get(id).subscribe({
      next: (data) => {
        this.currentTutorial = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  updatePublished(status: boolean): void {
    const data = {
      studentTitle: this.currentTutorial.studentTitle,
      studentDescription: this.currentTutorial.studentDescription,
      studentName: this.currentTutorial.studentName,
      studentGender: this.currentTutorial.studentGender,
      published: status,
    };

    this.message = '';

    if (this.currentTutorial.studentId == null) {
      return;
    }

    this.tutorialService
      .update(this.currentTutorial.studentId, data)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.currentTutorial.published = status;
          this.message = 'Thet status was updated successfully!';
        },
        error: (e) => console.error(e),
      });
  }

  updateTutorial(): void {
    this.message = '';

    if (this.currentTutorial.studentId == null) {
      return;
    }

    this.tutorialService
      .update(this.currentTutorial.studentId, this.currentTutorial)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.message = 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e),
      });
  }

  deleteTutorial(): void {
    if (this.currentTutorial.studentId == null) {
      return;
    }

    this.tutorialService.delete(this.currentTutorial.studentId).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/tutorials']);
      },
      error: (e) => console.error(e),
    });
  }
}
