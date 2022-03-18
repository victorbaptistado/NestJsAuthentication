import { Injectable } from '@nestjs/common';


export type User = {
    id: number;
    name: string;
    username: string;
    password: string;
};

@Injectable()
export class UsersService{
    private readonly users: User[] = 

    //User Example
    [{
        id: 1,
        name: 'John',
        username: 'victorbaptistado@gmail.com',
        password: 'hello',
    },
];

    async findOne(username: string): Promise<User | undefined>{
        return this.users.find(user => username === username)


    }
    ;
}