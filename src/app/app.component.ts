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

  projects = Projects
  
  constructor() {}

  ngOnInit(): void {

    window.addEventListener('scroll', () => {

      this.animaScroll()

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

}
