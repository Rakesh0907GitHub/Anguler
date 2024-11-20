import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {
  private entriesSubject = new BehaviorSubject<{ name: string; mobileNumber?: string; email: string }[]>([]);
  entries$ = this.entriesSubject.asObservable();
  
  private editableEntry: { entry: { name: string; mobileNumber?: string; email: string }, index: number } | null = null;

  constructor() {}

  getEntries() {
    return this.entriesSubject.getValue();
  }

  addEntry(entry: { name: string; mobileNumber?: string; email: string }) {
    const currentEntries = this.entriesSubject.getValue();
    this.entriesSubject.next([...currentEntries, entry]);
  }

  editEntry(index: number, entry: { name: string; mobileNumber?: string; email: string }) {
    const currentEntries = this.entriesSubject.getValue();
    currentEntries[index] = entry;
    this.entriesSubject.next([...currentEntries]);
  }

  deleteEntry(index: number) {
    const currentEntries = this.entriesSubject.getValue();
    currentEntries.splice(index, 1);
    this.entriesSubject.next([...currentEntries]);
  }

  setEditableEntry(entry: { name: string; mobileNumber?: string; email: string }, index: number) {
    this.editableEntry = { entry, index };
  }

  getEditableEntry() {
    return this.editableEntry;
  }

  clearEditableEntry() {
    this.editableEntry = null;
  }
}
