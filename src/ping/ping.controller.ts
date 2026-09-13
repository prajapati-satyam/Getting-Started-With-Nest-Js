import { Controller, Get, Param } from '@nestjs/common';

@Controller('ping')
export class PingController {


@Get()
sendRes() {
    return "<h1 style=\"display: flex; justify-content: center; font-family: monospace; font-size: 35px\">I Am Nestjs 😺😻</h1>"
    // return {"message": "pong", "description": "I Am Nestjs 😺😻", "status": true}
}

@Get(':id')
helloworld(@Param("id") id:string){
    return {"id": id, "message": "pong"}
}
}
