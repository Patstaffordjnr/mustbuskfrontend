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

pageNumber = 0;
itemsPerPage = 10;
users = this.userServce.getUsers();
listOfUsers = []

  async ngOnInit() {
    let listOfUsers = await this.userServce.getUsers();

    for (let i = this.pageNumber; i < this.itemsPerPage; i ++) {
      
      this.listOfUsers.push(listOfUsers[i]);
      console.log(this.listOfUsers[i]);
      this.changeDetection.detectChanges();
    };
  }

hupYaBoyo() {
  this.listOfUsers.length = 0
  this.pageNumber = this.pageNumber + 10;
  console.log(this.pageNumber);
  this.changeDetection.detectChanges();
  this.ngOnInit()

}

downYaBoyo() {
  this.pageNumber = this.pageNumber - 10;
  console.log(this.pageNumber);
  this.changeDetection.detectChanges();
}
}
  
//   getAll() {
//     return this.http.get<User[]>(`${environment.site}${environment.apiUrl}home`);
// }

// public getRoleNames(user: User) : Array<RoleName> {
//     const roleNames: Array<RoleName> = new Array();
//     for (let role of user.roles) { 
//         roleNames.push(role.roleName);
//     } 
//     return roleNames;
// }


  // async getAll() {

  //   let allUsers = await this.userServce.getUsers();
  //   console.log(allUsers);

  //   for (let i = 0; i < allUsers.length; i ++) {
  //     console.log(allUsers[i]);
  //     this.listOfUsers.push(allUsers[i]);
  //   };
  //   return console.log(this.listOfUsers)
  // }

