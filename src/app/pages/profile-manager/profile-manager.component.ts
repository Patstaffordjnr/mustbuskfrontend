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
  roleStrings = new Array<string>();
  profileForm = new FormGroup({
   
  email: new FormControl(''),
  id: new FormControl(''),
  password: new FormControl(''),
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  active: new FormControl(null, [Validators.required]),
  Roles: new FormControl(),
 });

constructor(private roleService: RoleService) {
  
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

 onSubmit() {
  // TODO: Use EventEmitter with form value
  console.log(this.profileForm.value);
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
