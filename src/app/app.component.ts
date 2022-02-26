import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Projects } from 'src/data/projects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('menu') menu: any
  @ViewChild('navMenu') navMenu: any
  @ViewChildren('aside') aside: any

  @ViewChild('sliderSkills') sliderSkills: any
  @ViewChild('slider') slider: any

  projects = Projects
  pressed: boolean = false
  startX: any
  x: any
  
  constructor() {}

  ngOnInit(): void {

    window.addEventListener('scroll', () => {

      this.animaScroll()

    })

    window.addEventListener('mouseup', () => {

      this.pressed = false

    })

  }

  openMenu() {

    this.menu.nativeElement.classList.toggle('menu-open')
    this.navMenu.nativeElement.classList.toggle('links-visible')

    if (document.body.style.overflow == 'hidden')

      document.body.style.overflow = 'auto'
    
    else document.body.style.overflow = 'hidden'

  }

  animaScroll() {

    const topPage = window.pageYOffset + ((window.innerHeight * 3) / 4)
    
    this.aside.forEach((element: any) => {

      if(topPage > element.nativeElement.offsetTop) {

        element.nativeElement.classList.add('aside-animation')
  
      } else {
  
        element.nativeElement.classList.remove('aside-animation')
  
      }
      
    })

  }

  down(e: MouseEvent) {

    this.pressed = true
    this.startX = e.offsetX - this.slider.nativeElement.offsetLeft
    this.sliderSkills.nativeElement.style.cursor = 'grabbing'

  }

  move(e: MouseEvent) {

    if(!this.pressed) {
      return e.preventDefault()
    }

    this.x = e.offsetX

    this.slider.nativeElement.style.left = `${this.x - this.startX}px`

    if(parseInt(this.slider.nativeElement.style.left) > 10)
      this.slider.nativeElement.style.left = '0px'

  }

  enter() {
          
    this.sliderSkills.nativeElement.style.cursor = 'grab'

  }

  up() {
          
    this.sliderSkills.nativeElement.style.cursor = 'grab'

  }


}

