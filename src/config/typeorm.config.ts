import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Karyawan } from '../karyawan/entity/karyawan.entity';
import { Tugas } from '../tugas/entity/tugas.entity';
import { createTableKaryawanTugas1666287356894 } from '../../migrations/1666287356894-create-table-karyawan-tugas';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
 
config();
 
const configService = new ConfigService();
 
export default new DataSource({
  type: 'postgres',
  host: configService.get('PGHOST'),
  port: configService.get('PGPORT'),
  username: configService.get('PGUSER'),
  password: configService.get('PGPASSWORD'),
  database: configService.get('PGDATABASE'),
  entities: [Karyawan, Tugas],
  migrations: [createTableKaryawanTugas1666287356894],
});

export const typeOrmConfig: TypeOrmModuleOptions = {
	type: 'postgres',
 	host: configService.get('PGHOST'),
 	port: configService.get('PGPORT'),
 	username: configService.get('PGUSER'),
 	password: configService.get('PGPASSWORD'),
 	database: configService.get('PGDATABASE'),
 	entities: [__dirname + '/../**/*.entity.{ts,js}'],
 	synchronize: false,
 	autoLoadEntities: true,
}