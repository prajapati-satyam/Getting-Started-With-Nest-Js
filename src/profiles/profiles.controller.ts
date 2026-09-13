import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { ProfileDTO, PutSchema } from '../dto/profiles.dto.js';
import { ProfilesService } from './profiles.service.js';


@Controller('profiles')
export class ProfilesController {
constructor(private profileservie: ProfilesService) {}
// @Get()
// findAll(@Query("name") name: string) {
//     return `Hello ${name}`
// }

@Get()
findAll() {
  return this.profileservie.findAll()
}

@Get(":id")
findById(@Param("id") id:string) {
    return { id }
}

@Post()
sendData(@Body() ProfileDTO: ProfileDTO) {
  return ProfileDTO
}

@Put(":id")
putfun(
    @Body() PutSchema: PutSchema,
    @Param("id") id: string
) {

    return {id, name: PutSchema.name, description: PutSchema.description}
}


@Delete(":id")
@HttpCode(HttpStatus.OK)
deletefun(
    @Body() PutSchema: PutSchema,
    @Param('id') id: string
) {
   return {id, message: "User Deleted"}
}
}
