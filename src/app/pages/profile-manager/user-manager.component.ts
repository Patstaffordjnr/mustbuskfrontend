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
   
  email: new FormControl('dumb@lalalal.com'),
  id: new FormControl(null),
  password: new FormControl(''),
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  active: new FormControl(null, [Validators.required]),
  roles: new FormArray([])
  // role: new FormArray([])
 });

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



initModelForm(): FormGroup{
  return this.fb.group({
    otherControls: [''],
    // The formArray, empty 
    myChoices: new FormArray([]),
  })
}


onCheckChange(role: Role): Role {

 
  const formArray: FormArray = this.profileForm.get('roles') as FormArray;


  formArray.value.RoleName.value.USER;
  formArray.value.RoleName.value.BUSKER;
  formArray.value.RoleName.value.ADMIN;






  this.saveRoleOfUser = role
  let roleChoice = this.saveRoleOfUser;
  let roleChoiceString =JSON.stringify(roleChoice)

  if(!this.userRoleSelect.has(roleChoice)) {
    this.userRoleSelect.add(roleChoice);
    console.log(this.userRoleSelect);

    formArray.push(new FormControl(roleChoice));
    console.log(formArray.value)
    
  } else if (this.userRoleSelect.has(roleChoice))
  
  
  {
  } return formArray.value
} 

async onSubmit() {
  // TODO: Use EventEmitter with form value
  console.log(this.profileForm.value);
  let user = new User(this.profileForm.controls.id.value, this.profileForm.controls.email.value, this.profileForm.controls.password.value, this.profileForm.controls.firstName.value, this.profileForm.controls.lastName.value,
     this.profileForm.controls.active.value, this.profileForm.controls.roles.value);
  const newUser = await this.userServce.addUser(user);
}

}
