import { Role } from "./Role";


export class User 
{   id?: number;
    roles: Set<Role>;
    email: string;

    constructor(roles: Set<Role>, email: string, id?: number) {
        this.id = id;
        this.email = email;
        this.roles = roles;
    }
}