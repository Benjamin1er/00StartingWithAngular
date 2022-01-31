import { Skill } from "./skill.model";

export class Developer {
    public firstName: string;
    public lastName: string;
    public age: string;
    public sexe: string;
    public bio: string;
    public picture: string;
    public skills: Skill[];

    constructor(firstName: string, lastName: string, age: string, sexe: string, bio: string, picture: string, skills: Skill[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.sexe = sexe;
        this.bio = bio;
        this.picture = picture;
        this.skills = skills;
    
    }
}