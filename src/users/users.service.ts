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
    [{
        id: 1,
        name: 'John',
        username: 'john',
        password: 'hello',
    },
    {
        id: 2,
        name: 'Anna',
        username: 'anna',
        password: 'goodbye',
    },
];

    async findOne(username: string): Promise<User | undefined>{
        return this.users.find(user => username === username)


    }
    ;
}