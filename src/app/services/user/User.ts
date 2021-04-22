import { Active } from "./Active";
import { Role } from "./role/Role";

export class User 
{   id?: number;
	email: string;
	password: string;
	firstName: string;
    lastName: string;
    active: Active;
    roles: Array<Role>;

    constructor(id: number, email: string, password: string, firstName: string, lastName: string, active: Active, roles: Array<Role>) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.active =  active;
        this.roles = roles;
    }
}