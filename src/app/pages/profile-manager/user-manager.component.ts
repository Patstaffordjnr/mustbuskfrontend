import { SelectorListContext } from '@angular/compiler';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { RoleService } from 'src/app/services/user/role/role.service';
import { RoleName } from 'src/app/services/user/role/RoleName';
import { Active } from '../../services/user/Active';
import { Role } from '../../services/user/role/Role';
import { HomeComponent } from '../home/home.component';
import { User } from '../../services/user/User'
import { throwError } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';
import { ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
 
@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})


export class UserManagerComponent implements  OnInit {
  

 
  
  loading = false;
  eActive = Active;

  public saveRoleOfUser? :Role;
  roles = new Array<Role>();
  userRoleSelect = new Set<Role>();

  profileForm = new FormGroup({
   
  email: new FormControl('PositiveAttitudeTowardsTheThingsWeWant@lalalal.com'),
  id: new FormControl(null),
  password: new FormControl(''),
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  active: new FormControl(null, [Validators.required]),
  roles: new FormArray([])
  // role: new FormArray([])
 });
 @ViewChildren("checkboxes") checkboxes?: QueryList<ElementRef>;

constructor(private fb: FormBuilder, private roleService: RoleService, private userServce: UserService) {
  
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

onCheckChange(role: Role): Role {
  this.saveRoleOfUser = role
  let roleChoice = this.saveRoleOfUser;

    if(!this.userRoleSelect.has(roleChoice)) {
    this.userRoleSelect.add(roleChoice);
  } else if (this.userRoleSelect.has(roleChoice))
    this.userRoleSelect.delete(roleChoice);
  {
  } return role 
} 

updateProfileForm() {
  this.checkboxes?.forEach((element) => {
    element.nativeElement.checked = false;
  });
  this.profileForm.controls.roles.value.length = 0
  this.userRoleSelect.clear(); 
  this.profileForm.enable();
}


async onSubmit() {
  if(this.userRoleSelect.size === 0) {
    return alert("You must select a Role.")
  }
  this.userRoleSelect.forEach((role: Role) => {
    this.profileForm.value.roles.push(role);
  });

  let user = new User(this.profileForm.controls.id.value,
                      this.profileForm.controls.email.value,
                      this.profileForm.controls.password.value,
                      this.profileForm.controls.firstName.value,
                      this.profileForm.controls.lastName.value,
                      this.profileForm.controls.active.value,
                      this.profileForm.controls.roles.value);
 
  const newUser = await this.userServce.addUser(user);

  console.log(newUser);
 
  this.profileForm.disable();

};

}
