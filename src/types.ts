/* istanbul ignore file */
export interface IRandomUserResponse {
    results: UserResponseResult[];
    info:    Info;
}

export interface Info {
    seed:    string;
    results: number;
    page:    number;
    version: string;
}

export interface UserResponseResult {
    gender:     string;
    name:       Name;
    dob:        Dob;
    cell:       string;
    picture:    Picture;
    email:        string;
}

export interface Dob {
    date: Date;
    age:  number;
}


export interface Name {
    title: string;
    first: string;
    last:  string;
}

export interface Picture {
    large:     string;
    medium:    string;
    thumbnail: string;
}