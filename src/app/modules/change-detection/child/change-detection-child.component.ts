import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection-child',
  template: `{{ value | json }}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ChangeDetectionChildComponent implements OnInit {

  @Input() value: any;

  constructor() { }

  ngOnInit() { }
}
