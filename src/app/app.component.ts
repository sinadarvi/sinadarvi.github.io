import {AfterViewInit, Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit{
  title = 'Sina Darvishi';

  constructor(private elementRef: ElementRef){

  }

  ngAfterViewInit(): void {
    //This will change the background color
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#F5F5F5';
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = Url('https://images.unsplash.com/photo-1529920300777-27eec6beaa41?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42b9a09204cc170c653a63cd132bbe7a&auto=format&fit=crop&w=1051&q=80');
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'url(' + 'https://images.unsplash.com/photo-1529920300777-27eec6beaa41?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42b9a09204cc170c653a63cd132bbe7a&auto=format&fit=crop&w=1951&q=80' + ')';
    this.elementRef.nativeElement.ownerDocument.body.style.height = '100%';
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundPosition = 'center';
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundRepeat = 'no-repeat';
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundSize = 'cover';
  }
}
