import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class ProfilesService {
    private profiles = [
        {
            id: randomUUID(),
            name: "Python",
            description: "I am modern language"
        },
        {
            id: randomUUID(),
            name: "java",
            description: "I am old language but still power banking server"
        }, {
            id: randomUUID(),
            name: "C",
            description: "I am old language but I am father, all languages and framework using me. I power OS and all computers in the whole world"
        }
    ]
    findAll() {
         return this.profiles
    }
}
