import { Component, OnInit } from '@angular/core';
//this page is where we can write logic for the navigation bar


document.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth < 730) {
    document.getElementById("navigation-right").style.display = "none";
  }
});


function resize() {
  if (window.innerWidth > 730) {
    document.getElementById("navigation-right").style.display = "block";
  } else if (window.innerWidth < 730) {
    document.getElementById("navigation-right").style.display = "none";
  }
}

window.onresize = resize

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  accountMenu = false

  constructor() { }

  ngOnInit() {
  }

  //this function below is what pulls up login and password on the account icon
  toggleAccountMenu() {
    console.log(this.accountMenu)
    this.accountMenu = this.accountMenu == true ? false : true
    document.getElementById("navigation-right").style.display = "none";
  }

  test() {
    // console.log(this.accountMenu)
    // click on the user login and the dropdown list should go away
    this.accountMenu = this.accountMenu == true ? false : false

    var y = document.getElementById("user-menu")

    if (y.style.display === "none") {
      y.style.display = "block";
    }
    else {
      y.style.display = "none";
    }


    if (window.innerWidth < 731) {
      document.getElementById("navigation-right").style.display = "none";
    }
  }


  MobileMenu() {

    var x = document.getElementById("navigation-right");

    if (this.accountMenu === true) {
      this.accountMenu = false
    }

    if (x.style.display === "none") {
      x.style.display = "block";
    }
    else {
      x.style.display = "none";
    }
  }

}

