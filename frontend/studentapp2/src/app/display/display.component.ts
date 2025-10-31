import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CseapiserviceService, Student } from '../cseapiservice.service';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  students: Student[] = [];

  constructor(private service: CseapiserviceService) {}

  ngOnInit() {
    this.service.getAllData().subscribe({
      next: (data) => {
        console.log(data);
        // Convert all names to uppercase
        this.students = data.map(student => ({
          ...student,
          name: student.name.toUpperCase()
        }));
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => console.log('Data fetch complete')
    });
  }
}
