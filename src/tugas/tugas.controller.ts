import { Controller, Get, Post, Param, Body, Put, UsePipes, Query, Delete } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import { TugasService } from './tugas.service';
import { CreateTugasDto } from './dto/create-tugas.dto';
import { UpdateTugasDto } from './dto/update-tugas.dto';
import { Tugas } from './entity/tugas.entity';

@Controller('tugas')
export class TugasController {
	private tugasService: TugasService;

	constructor(tugasService: TugasService) {
		this.tugasService = tugasService;
	}

	@Get()
	async getAllTugas(): Promise<Tugas[]> {
		return this.tugasService.getAllTugas();
	}

	@Get('/:id')
	async getTugasById(@Param('id') id: number): Promise<Tugas> {
		return this.tugasService.getTugasById(id);
	}

	@Post()
	@UsePipes(ValidationPipe)
	async addTugas(@Body() data: CreateTugasDto) {
		return this.tugasService.addTugas(data);
	}

	@Put('/:id')
	async updateTugas(@Param('id') id: number, @Body() data: UpdateTugasDto): Promise<Tugas> {
		return this.tugasService.updateTugas(id, data);
	}

	@Delete('/:id')
	async deleteTugas(@Param('id') id: number) {
		return this.tugasService.deleteTugas(id);
	}
}
