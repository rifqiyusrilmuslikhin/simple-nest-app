import { Controller, Get, Post, Param, Body, Put, UsePipes, Query, Delete } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import { KaryawanService } from './karyawan.service';
import { Karyawan } from './entity/karyawan.entity';
import { CreateKaryawanDto } from './dto/create-karyawan.dto';
import { UpdateKaryawanDto } from './dto/update-karyawan.dto';

@Controller('karyawan')
export class KaryawanController {
	constructor(private karyawanService: KaryawanService) {}

	@Get()
	async getAllKaryawan(): Promise<Karyawan[]> {
		return this.karyawanService.getAllKaryawan();
	}

	@Get('/:id')
	async getKaryawanById(@Param('id') id: number): Promise<Karyawan> {
		return this.karyawanService.getKaryawanById(id);
	}

	@Post()
	@UsePipes(ValidationPipe)
	async addKaryawan(@Body() data: CreateKaryawanDto): Promise<Karyawan> {
		return this.karyawanService.addKaryawan(data);
	}

	@Put('/:id')
	async updateKaryawan(@Param('id') id: number, @Body() data: UpdateKaryawanDto): Promise<Karyawan> {
		return this.karyawanService.updateKaryawan(id, data);
	}

	@Delete('/:id')
	async deleteKaryawan(@Param('id') id: number){
		return this.karyawanService.deleteKaryawan(id);
	}
}
