import { SelectorListContext } from '@angular/compiler';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoleService } from 'src/app/services/user/role/role.service';
import { RoleName } from 'src/app/services/user/role/RoleName';
import { Active } from '../../services/user/Active';
import { Role } from '../../services/user/role/Role';
import { HomeComponent } from '../home/home.component';
import { User } from '../.../../../services/user/User'
import { throwError } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';

 
@Component({
  selector: 'app-profile-manager',
  templateUrl: './profile-manager.component.html',
  styleUrls: ['./profile-manager.component.css']
})


export class ProfileManagerComponent implements  OnInit {
  
  public saveRoleOfUser? :Role;
  userRoleSet = new Set()


  loading = false;
  eActive = Active;

  roles = new Array<Role>();
  rolesSet = new Set<Role>();
  roleStrings = new Array<string>();
  profileForm = new FormGroup({
   
  email: new FormControl(''),
  id: new FormControl(null),
  password: new FormControl(''),
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  active: new FormControl(null, [Validators.required]),
  Roles: new FormControl(),
 });

constructor(private roleService: RoleService, private userServce: UserService) {
  
}


async ngOnInit() {

  this.loading = true;
   await this.roleService.getRoles().then(result => {
     this.roles = result;

     let roles = [this.roles[0], this.roles[1], this.roles[2]]

     for (let dumb = 0; dumb < this.roles.length; dumb ++) {
     }
     this.loading = false;});
     
}






async onSubmit() {
  // TODO: Use EventEmitter with form value
  console.log(this.profileForm.value);
  let user = new User(this.profileForm.controls.id.value, this.profileForm.controls.email.value, this.profileForm.controls.password.value, this.profileForm.controls.firstName.value, this.profileForm.controls.lastName.value,
     this.profileForm.controls.active.value, Array.from(this.rolesSet.values()));
  const newUser = await this.userServce.addUser(user);

}






















onCheckChange(role: Role): void {
  this.saveRoleOfUser = role
  let roleChoice = this.saveRoleOfUser;
  let roleChoiceString =JSON.stringify(roleChoice)

  if(roleChoiceString = "ADMIN") {
    this.userRoleSet.add(this.roles[0])
  
    console.log(this.userRoleSet)
  }
  this.userRoleSet.add(this.saveRoleOfUser);
  
};



}
