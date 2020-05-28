import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dragndrop',
  templateUrl: './dragndrop.component.html',
  styleUrls: ['./dragndrop.component.scss']
})
export class DragndropComponent implements OnInit {

  letters: Array<string> = [
    "A","B","C","D"
  ]

  numbers = [
    "1","2","3","4"
  ]

  symbols = [
    '1','==','4','+','3','*','/','2'
  ]

  trash = []

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if(event.previousContainer === event.container)
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    else
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
  }

  checkMath(): boolean {
    try {
      return eval(this.symbols.join(''));
    } catch(e) {
      return false;
    }
  }

}
