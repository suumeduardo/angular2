import { Component } from '@angular/core';

interface Elem {
  name:string;
  selected:boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'A checklist'; 

  private elems: Elem[] = [];

  addName(name:string){
    this.elems.push({name, selected: false})
  }

  removeName(elem: Elem){
    if (elem.selected===true){
      let index = this.elems.indexOf(elem);
        if (index>-1){
          this.elems.splice(index,1);
        }
    }
    
  }
}
