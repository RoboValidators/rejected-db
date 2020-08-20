import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import RejectController from "./reject.controller";
import RejectService from "./reject.service";
import Validator from "./validator.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Validator])],
  exports: [TypeOrmModule],
  controllers: [RejectController],
  providers: [RejectService]
})
export default class RejectModule {}
