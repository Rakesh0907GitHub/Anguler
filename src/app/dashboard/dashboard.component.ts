import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EntriesService } from '../entries/entries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  reactiveForm!: FormGroup;
  editIndex: number | null = null;
  carouselImages = [
    'assets/tech3.jpg',
    'assets/tech2.jpg',
    'assets/tech1.jpg'
  ];
  currentImageIndex = 0;

  constructor(private entriesService: EntriesService, private router: Router) {}

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      mobileNumber: new FormControl(null, [Validators.maxLength(10), Validators.minLength(10)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });

    const editableEntry = this.entriesService.getEditableEntry();
    if (editableEntry) {
      this.reactiveForm.setValue({
        name: editableEntry.entry.name,
        mobileNumber: editableEntry.entry.mobileNumber || '',
        email: editableEntry.entry.email,
      });
      this.editIndex = editableEntry.index;
    }
  }
  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
  }

  
  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.carouselImages.length;
  }

  startCarousel() {
    setInterval(() => {
      this.nextImage(); // Automatically move to the next image every 4 seconds
    }, 4000); // Change this value to adjust the speed
  }
  onSubmit() {
    if (this.reactiveForm.valid) {
      const entry = this.reactiveForm.value;
      if (this.editIndex === null) {
        this.entriesService.addEntry(entry);
      } else {
        this.entriesService.editEntry(this.editIndex, entry);
        this.editIndex = null;
      }
      this.entriesService.clearEditableEntry(); // Clear the editable entry
      this.reactiveForm.reset();
      this.router.navigate(['/tables']); // Navigate back to Tables after submit
    }
  }
}
