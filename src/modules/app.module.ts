import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TerminusModule } from '@nestjs/terminus';
import { ConfigModule } from '@nestjs/config';

import TypeOrmConfig from "../config/TypeOrmConfig";

import RejectModule from "./reject/reject.module";
import HealthController from './health/health.controller';

@Module({
  imports: [
    // Health check section
    TerminusModule, 
    // Env Variables section
    ConfigModule.forRoot({ 
      isGlobal: true,
    }),
    // DB Section
    TypeOrmModule.forRootAsync({ 
      useClass: TypeOrmConfig,
    }),
     // Project modules section
    RejectModule
  ],
  controllers: [HealthController],
  providers: []
})
export class AppModule {}
