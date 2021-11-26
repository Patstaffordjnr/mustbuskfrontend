import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { User } from '../../../services/user/User';
import { UserService } from 'src/app/services/user/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-pagination',
  templateUrl: './user-pagination.component.html',
  styleUrls: ['./user-pagination.component.css']
})

export class UserPaginationComponent {

  constructor(private http: HttpClient, private userServce: UserService, private changeDetection: ChangeDetectorRef) { }

pageNumber = 1;

itemsPerPage = 10;
users = this.userServce.getUsers();
listOfUsers = [];
contentPageNumbers = [];

firtsPageNumber = 0;
lastPageNumber = 5;
  async ngOnInit() {
    let aListOfUsers = await this.userServce.getUsers();
    for (let i = 0; i < aListOfUsers.length; i ++) {
      this.listOfUsers.push(aListOfUsers[i]);
    };

     this.contentPageNumbers.length = 10;
     let listOfNumbers = Math.ceil(this.listOfUsers.length / this.contentPageNumbers.length);

     for (let i = 0; i < listOfNumbers; i ++) {
      this.contentPageNumbers.push({i});
    };
    this.contentPageNumbers.length = this.contentPageNumbers.length - 9;
  }

async hupYaBoyo() {
  this.pageNumber = this.pageNumber + 1;
  this.lastPageNumber = this.lastPageNumber +1;
  this.firtsPageNumber = this.firtsPageNumber +1;
  console.log(this.firtsPageNumber, this.pageNumber, this.lastPageNumber);

}
async downYaBoyo() {
  this.pageNumber = this.pageNumber - 1;
  this.lastPageNumber = this.lastPageNumber -1;
  this.firtsPageNumber = this.firtsPageNumber -1;
  console.log(this.firtsPageNumber, this.pageNumber, this.lastPageNumber);

  // this.lastPageNumber = this.lastPageNumber -1;
}

selectedPageNumber?: Number;
onSelect(selectedPage: Number): Number {
  this.pageNumber = Number(selectedPage);
  // this.lastPageNumber = Number(selectedPage) + 3;
  return selectedPage
 
}

}
  


