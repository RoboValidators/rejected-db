import { Controller, Get } from "@nestjs/common";

import RejectService from "./reject.service";
import Validator from "./validator.entity";

@Controller("validators")
export default class RejectController {
  constructor(private readonly rejectService: RejectService) {}

  @Get()
  findAll(): Promise<Validator[]> {
    return this.rejectService.findAll();
  }
}
