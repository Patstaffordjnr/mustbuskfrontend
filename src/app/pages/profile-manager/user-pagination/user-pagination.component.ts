import { Component, OnInit } from '@angular/core';
import { User } from '../../../services/user/User';
import { UserService } from 'src/app/services/user/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-pagination',
  templateUrl: './user-pagination.component.html',
  styleUrls: ['./user-pagination.component.css']
})


export class UserPaginationComponent {

  constructor(private http: HttpClient, private userServce: UserService) { }



  async getAll() {

    // debugger;
    let allUsers = await this.userServce.getUsers();

    console.log(allUsers);



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
}
