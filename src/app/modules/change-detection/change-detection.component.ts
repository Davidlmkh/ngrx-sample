import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: 'change-detection.component.html',
})

export class ChangeDetectionComponent implements OnInit {

  value = { name: 'toto' };

  constructor() { }

  ngOnInit() { }

  onbutton() {
    // this.value.name = 'tata';

    this.value = {
      ...this.value,
      name: 'tata',
    };
  }
}
