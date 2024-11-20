import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntriesService } from '../entries/entries.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  entries: { name: string; mobileNumber?: string; email: string }[] = [];

  constructor(private entriesService: EntriesService, private router: Router) {}

  ngOnInit() {
    this.entriesService.entries$.subscribe((entries) => {
      this.entries = entries;
    });
  }

  onEdit(index: number) {
    const entry = this.entries[index];
    this.entriesService.setEditableEntry(entry, index);
    this.router.navigate(['/dashboard']); // Navigate to Dashboard
  }

  onDelete(index: number) {
    this.entriesService.deleteEntry(index);
  }
}
