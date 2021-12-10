import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../../services/user/User';
import { UserService } from 'src/app/services/user/user.service';
import { HttpClient } from '@angular/common/http';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-user-pagination',
  templateUrl: './user-pagination.component.html',
  styleUrls: ['./user-pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class UserPaginationComponent {

  constructor(private http: HttpClient, private userServce: UserService, private changeDetection: ChangeDetectorRef) { }

listOfUsers = [];
pageNumber = 1;
itemsPerPage = 10;

noOfPages = [];
// 49;
dynamicPageSelection = [];
firstPage = 0;
lastPage = 5;

x = this.pageNumber < 3;

  async ngOnInit() {
    let getAllUsers = await this.userServce.getUsers();

    for (let i = 0; i < getAllUsers.length; i ++) {
      this.listOfUsers.push(getAllUsers[i]);
    };

     this.noOfPages.length = 10;
     let listOfNumbers = Math.ceil(this.listOfUsers.length / this.noOfPages.length);

     for (let i = 0; i < listOfNumbers; i ++) {
      this.noOfPages.push({i});
    };

    this.noOfPages.length = this.noOfPages.length - 10;

    for ( let i = this.firstPage; i < this.lastPage; i++) {
      this.dynamicPageSelection.push([i]);
    }
  }

async hupYaBoyo() {

  if(Number(this.dynamicPageSelection[4]) > this.noOfPages.length -1) {
    return
  }
  this.pageNumber++
  this.firstPage++
  this.lastPage++

  let updatedList = this.dynamicPageSelection.map(x => Number(x) + 1)
  this.dynamicPageSelection = updatedList;
}

async downYaBoyo() {

  if(Number(this.dynamicPageSelection[0]) < 1) {
    return
  }
  this.pageNumber--
  this.lastPage--
  this.lastPage--
  
  this.dynamicPageSelection = this.dynamicPageSelection.map(x => Number(x) - 1);
}

selectedPageNumber?: Number;
onSelect(selectedPage: Number): Number {
  
  this.pageNumber = Number(selectedPage);
  console.log(selectedPage)
  return selectedPage
}
}

