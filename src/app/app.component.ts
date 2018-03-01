import {
  Component
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
      trigger('heroState', [
          state('inactive', style({
              backgroundColor: 'red',
              marginLeft: '40px',
              transform: 'scale(1) translateX(10px)',


          })),
          state('active', style({
              backgroundColor: 'orange',
              transform: 'scale(1.1) translateY(0px)'
          })),
          transition('inactive => active', animate('100ms ease-in')),
          transition('active => inactive', animate('100ms ease-out'))
      ]),
      trigger('move', [

          transition('void => *', [
              style({
                  transform: 'translateX(-100%)',
                  backgroundColor: 'lightcoral'
              }, ),
              animate(1200)
          ]),
          transition('* => void', [
              animate('10s', style({
                      transform: 'translateX(200%)',
                      backgroundColor: 'lightCoral'
                  })

              )
          ])


      ]),
      trigger('anim', [
        
                  transition(':enter', [
                      style({
                          transform: 'translateX(-100%)',
                          backgroundColor: 'lightcoral'
                      }, ),
                      animate(1200)
                  ]),
                  transition(':leave', [
                      animate('10s', style({
                              transform: 'translateX(200%)',
                              backgroundColor: 'lightCoral'
                          })
        
                      )
                  ])
        
        
              ])


  ]
})
export class AppComponent {
  title = 'app';
  state: string = "active";
  count: number = 1;
  shower: Boolean = true;
item:Array<any>=[];
constructor(){

  this.item=["hello sir"];
}

  animator() {
      this.count++;
      this.item.push("HashWork IT");
      if (this.count == 5) {

          this.shower = false;
      }
      this.state = this.state === 'active' ? 'inactive' : 'active';
  }
  remover(){
    this.item.pop();
  }
}