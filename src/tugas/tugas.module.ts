import { Module, forwardRef } from '@nestjs/common';
import { TugasController } from './tugas.controller';
import { TugasService } from './tugas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KaryawanModule } from 'src/karyawan/karyawan.module';
import { KaryawanService } from '../karyawan/karyawan.service';
import { Tugas } from './entity/tugas.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Tugas]), forwardRef(() => KaryawanModule)],
	controllers: [TugasController],
	providers: [TugasService],
})
export class TugasModule {}
