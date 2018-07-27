import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {MaterialModule} from "../material";
import {animate, AnimationBuilder, AnimationPlayer, style} from "@angular/animations";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @ViewChild('one') d1: ElementRef;
  public player: AnimationPlayer;

  constructor(private elementRef: ElementRef, private _builder: AnimationBuilder) {
  }

  ngOnInit() {
    var aboutMePage = this.elementRef.nativeElement.ownerDocument.getElementById('about-me-page');
    // aboutMePage.style.display = 'none'
  }

  setSize() {
    MaterialModule.width = window.innerWidth;
    MaterialModule.height = window.innerHeight;
    MaterialModule.r = Math.sqrt(MaterialModule.width * MaterialModule.width + MaterialModule.height * MaterialModule.height);
  }

  //TODO : onclick for About Me! button should be add here
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setSize()
  }

  clickOnMe($event) {
    const splash = this.elementRef.nativeElement.ownerDocument.getElementById('splash');
    const btn = this.elementRef.nativeElement.ownerDocument.getElementById('clickOnMe');
    splash.style.display = 'block';
    splash.style.backgroundColor = 'transparent';
    this.setSize();

    MaterialModule.pageX = $event.pageX;
    MaterialModule.pageY = $event.pageY;


    const circle = this.elementRef.nativeElement.ownerDocument.getElementById('circle');
    circle.style.backgroundColor = "#f26522";
    circle.style.position = 'absolute';
    circle.style.width = (MaterialModule.r * 2).toString() + 'px';
    circle.style.height = (MaterialModule.r * 2).toString() + 'px';
    circle.style.borderRadius = '50%';
    circle.style.left = MaterialModule.pageX.toString() + 'px';
    circle.style.top = MaterialModule.pageY.toString() + 'px';
    circle.style.marginLeft = -MaterialModule.r.toString() + 'px';
    circle.style.marginTop = -MaterialModule.r.toString() + 'px';

    const factory = this._builder.build([
      style({
        position: 'absolute',
        'background-color': "#f26522",
        width: 0,
        height: 0,
        "border-radius": "50%",
        left: MaterialModule.pageX,
        top: MaterialModule.pageY,
        'margin-left': 0,
        'margin-top': 0
      }),
      animate('600ms ease-in-out')
    ]);

    this.player = factory.create(circle, {});
    this.player.play();
    this.player.onDone(() => {
      // circle.style.display = 'none';
      splash.style.backgroundColor = "#ECEFF1";
      // splash.removeChild(circle);
      alert('About me page working in progress!')
      // this.elementRef.nativeElement.ownerDocument.getElementById('about-me-page').style.display = 'block';

    });


  }
}
