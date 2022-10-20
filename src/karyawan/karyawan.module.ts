import { Module } from '@nestjs/common';
import { KaryawanController } from './karyawan.controller';
import { KaryawanService } from './karyawan.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Karyawan } from './entity/karyawan.entity';


@Module({
	imports: [TypeOrmModule.forFeature([Karyawan])],
  	controllers: [KaryawanController],
  	providers: [KaryawanService],
  	exports: [KaryawanService],
})
export class KaryawanModule {}
