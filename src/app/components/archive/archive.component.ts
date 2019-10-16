import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  @Input() archives;
  constructor(
  ) { }

  ngOnInit() {
  }

}
