import { Component, OnInit ,AfterViewInit, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(public ref: ChangeDetectorRef) {
  }
  public data: any[] = [];
  title = 'slide-show';
  public frame = 0;
  public auto_play: any;
  public action_click: any;
  public is_busy: boolean = false;
  public slide: any;
  ngOnInit() {
     this.data = [
       {
         src: 'https://i.pinimg.com/originals/21/6f/69/216f69f569a73717d54db552551ad43f.jpg'
       },
       {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIdiuSxS8SEn5YX73uMOddy9fvpX7dnFfaOA&usqp=CAU'
        },
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoAjx9DU4H-7H7JUHV3jkwZjlIulWt26Wz1Q&usqp=CAU'
        },
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLhzjnSbHlTMt07GzTIz6wGOP28iSp0dsWJA&usqp=CAU'
        },
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRWeUYj0zqkGhROGDroMkuCEOfJg87gl9QVg&usqp=CAU'
        },
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7yAocaUffXnHbwmqQ7ZfeJfWfYexv9vYiEg&usqp=CAU'
        },
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9Q7DPlmKmtdiwIQZslRIu57YzcswsccmUyQ&usqp=CAU'
        }
     ];
  }

  ngAfterViewInit(): void {
    let $this = this;
    this.auto_play = setInterval(() => this.play($this), 2000);
    this.slide = document.getElementsByClassName('slide-item');
  }

  play($this) {
    let divs: any;
    divs = document.getElementsByClassName('slide-item');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < divs.length; i++) {
      divs[i].style.transition = '0.7s';
      if (divs[i].style.left === (divs.length - 2) * 100 + '%') {
        divs[i].style.left = '-100%';
        divs[i].style.zIndex = 5;
        $this.frame = divs[i].style.left === '0%' ||  divs[i].style.left === '-0%' ? i : $this.frame;
        continue;
      }
      // tslint:disable-next-line: radix
      divs[i].style.left =  parseInt(divs[i].style.left) + 100 + '%';
      divs[i].style.zIndex = divs[i].style.left === '0%' ? 10 : 5;
      $this.frame = divs[i].style.left === '0%' ||  divs[i].style.left === '-0%' ? i : $this.frame;
    }
  }
  previous() {
    clearInterval(this.auto_play);
    clearTimeout(this.action_click);
    let divs: any;
    divs = document.getElementsByClassName('slide-item');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < divs.length; i++) {
      divs[i].style.transition = '0.3s';
      if (divs[i].style.left === '-' + (divs.length - 2) * 100 + '%') {
        divs[i].style.left = '100%';
        divs[i].style.zIndex = 5;
        this.frame = divs[i].style.left === '0%' ||  divs[i].style.left === '-0%' ? i : this.frame;
        continue;
      }
      // tslint:disable-next-line: radix
      divs[i].style.left =  parseInt(divs[i].style.left) - 100 + '%';
      divs[i].style.zIndex = divs[i].style.left === '0%' ? 10 : 5;
      this.frame = divs[i].style.left === '0%' ||  divs[i].style.left === '-0%' ? i : this.frame;
    }
    this.action_click = setTimeout(() => {
      this.auto_play = setInterval(() => this.play(this), 2000);
    }, 2000);
  }
  next() {
    clearInterval(this.auto_play);
    clearTimeout(this.action_click);
    let divs: any;
    divs = document.getElementsByClassName('slide-item');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < divs.length; i++) {
      divs[i].style.transition = '0.3s';
      if (divs[i].style.left === (divs.length - 2) * 100 + '%') {
        divs[i].style.left = '-100%';
        divs[i].style.zIndex = 5;
        this.frame = divs[i].style.left === '0%' ||  divs[i].style.left === '-0%' ? i : this.frame;
        continue;
      }
      // tslint:disable-next-line: radix
      divs[i].style.left =  parseInt(divs[i].style.left) + 100 + '%';
      divs[i].style.zIndex = divs[i].style.left === '0%' ? 10 : 5;
      this.frame = divs[i].style.left === '0%' ||  divs[i].style.left === '-0%' ? i : this.frame;
    }
    this.action_click = setTimeout(() => {
      this.auto_play = setInterval(() => this.play(this), 2000);
    }, 2000);
  }
  changeFrame() {
    this.frame = this.frame;
  }
}
