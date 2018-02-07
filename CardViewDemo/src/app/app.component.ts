import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  colSize: any =2;
  // cardTitle = 'Shiba Inu';
  cardDetails: any = [
    // tslint:disable-next-line:max-line-length
    {cardTitle: 'Shiba Inu', cardSubTitle: 'Dog Breed', cardImage: 'https://material.angular.io/assets/img/examples/shiba2.jpg', cardContent: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'},
    {cardTitle: 'Pitbull', cardSubTitle: 'Dog Breed', cardImage: 'https://cdn.pixabay.com/photo/2012/12/11/21/28/pitbull-69416_960_720.jpg', cardContent: 'Testing Pitbull'},
    {cardTitle: 'German Shepherd', cardSubTitle: 'Dog Breed', cardImage: 'http://maxpixel.freegreatpicture.com/static/photo/1x/German-Shepherd-Dog-Portrait-Military-Canine-962252.jpg', cardContent: 'Testing German Shepherd'}
  ];

  tabDetails: any = [
    // tslint:disable-next-line:max-line-length
    {label: 'Tab 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.'},
    {label: 'Tab 2', content: 'testing 2'},
    {label: 'Tab 3', content: 'testing 3'},
    {label: 'Tab 4', content: 'testing 4'},
    {label: 'Tab 5', content: 'testing 5'},
    {label: 'Tab 6', content: 'testing 6'}
  ];

  onSelectedField() {
    console.log('Selected field...', this.cardDetails.cardTitle);
  }
  onLike() {
    console.log('I like this...', this.cardDetails.cardTitle);
  }
  onResize(event) {
    const element = event.target.innerWidth;
    console.log(element);
    if (element < 950) {
      this.colSize = 2;
    }
    if (element > 950) {
      this.colSize = 3;
    }
    if (element < 750) {
      this.colSize = 1;
    }
  }
}
