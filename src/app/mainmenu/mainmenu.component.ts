import { Component, OnInit } from '@angular/core';
import { Mainmenu } from './mainmenu';
import { AuthenticationService } from '../_services/authentication.service'
import { UserService } from '../_services/user.service'
import { User } from '../_models/user';


@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']

})
export class MainmenuComponent implements OnInit {

    menu = JSON.stringify(Mainmenu);
    
   

  constructor() { 
    

  }
  ngOnInit(): void {
  }
}
