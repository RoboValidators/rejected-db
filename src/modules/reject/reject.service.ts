import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import Validator from "./validator.entity";

@Injectable()
export default class RejectService {

  constructor(
    @InjectRepository(Validator)
    private readonly validatorRepository: Repository<Validator>,
  ) {}

  async findAll(): Promise<Validator[]> {
    return this.validatorRepository.find();
  }
}
