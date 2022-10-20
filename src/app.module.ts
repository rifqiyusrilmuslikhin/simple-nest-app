import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KaryawanModule } from './karyawan/karyawan.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TugasModule } from './tugas/tugas.module';
import  DatabaseModule  from './database/database.module';
import { typeOrmConfig } from './config/typeorm.config';
import { Karyawan } from './karyawan/entity/karyawan.entity';
import { Tugas } from './tugas/entity/tugas.entity';


@Module({
  imports: [
  ConfigModule.forRoot({isGlobal: true}),
  TypeOrmModule.forFeature([Karyawan, Tugas]), 
  TypeOrmModule.forRoot(typeOrmConfig),
  KaryawanModule,
  TugasModule,
   DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
