import { Role } from "./role/Role";

export class User 
{   id?: number;
	email: string;
	password: string;
	firstName: string;
	lastName: string;
    roles: Array<Role>;

    constructor(email: string, password: string, firstName: string, lastName: string, roles: Array<Role>, id?: number) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.roles = roles;
    }
}