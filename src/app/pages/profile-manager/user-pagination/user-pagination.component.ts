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
listOfUsers = []

  async ngOnInit() {
    let alistOfUsers = await this.userServce.getUsers();
    for (let i = 0; i < alistOfUsers.length; i ++) {
      this.listOfUsers.push(alistOfUsers[i]);

    };
  }

async hupYaBoyo() {
  this.pageNumber = this.pageNumber + 1;
}
async downYaBoyo() {
  this.pageNumber = this.pageNumber - 1;
}

}
  


