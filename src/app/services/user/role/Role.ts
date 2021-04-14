import { RoleName } from "./RoleName";

export class Role 
{   id: number;
    roleName: RoleName;

    constructor(id: number, roleName: RoleName) {
        this.id = id;
        this.roleName = roleName;
    }
}