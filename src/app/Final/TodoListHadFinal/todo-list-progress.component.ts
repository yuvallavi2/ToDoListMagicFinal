import {Component, Input} from '@angular/core';

@Component({
  selector: 'todo-list-progress',
  template: `
    <div class="d-flex justify-content-end">
      Status: &nbsp;
      <div class="d-inline-block progress ">
        <div class="bg-warning border" [ngStyle]="{ width: percentage * 100 + '%' }">
          &nbsp;
        </div>
      </div>
      <div class="d-inline-block" style="padding: 0px 3px">
        {{ percentage | percent}}
      </div>
    </div>

  `,
  styles: []
})
export class TodoListProgressComponent {

  get percentage(){
    if(this.totalRecords === 0) return 0;
    return this.totalDone / this.totalRecords;
  }

  @Input() totalDone:number;
  @Input() totalRecords:number;

}
