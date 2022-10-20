import { Injectable, NotFoundException, InternalServerErrorException, forwardRef, Inject } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateTugasDto } from './dto/create-tugas.dto';
import { UpdateTugasDto } from './dto/update-tugas.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tugas } from './entity/tugas.entity';
import { KaryawanService } from '../karyawan/karyawan.service';
import { Repository } from 'typeorm';

@Injectable()
export class TugasService {
	constructor (
		@InjectRepository(Tugas) 
		private readonly tugasRepository: Repository<Tugas>,
		@Inject(forwardRef(() => KaryawanService))
		private readonly karyawanService: KaryawanService
		) {}

	async getAllTugas(): Promise<Tugas[]> {
		return await this.tugasRepository.find();
	}

	async addTugas(data: CreateTugasDto) {
	 	const karyawanId = await this.karyawanService.getKaryawanById(data.assignee);
	 	if(!karyawanId) {
				throw new NotFoundException('id not found');
 		}else {
	 		const tugas = new Tugas();
		 	tugas.title = data.title;
			tugas.description = data.description;
	 		tugas.assignee = karyawanId;

			return await this.tugasRepository.save(tugas);
	 	}
	}

	async getTugasById(tugasId: number): Promise<Tugas> {
		try {
			return await this.tugasRepository.findOneBy({id: tugasId});
		} catch(e) {
			throw new NotFoundException('id not found');
		}
	}

	async updateTugas(id: number, data: UpdateTugasDto): Promise<Tugas> {
		try {
			const tugas = await this.getTugasById(id);
			const karyawanId = await this.karyawanService.getKaryawanById(data.assignee);

			if(!karyawanId) {
				throw new NotFoundException('assigne not found');	
			} else {
				tugas.title = data.title;
				tugas.description = data.description;
				tugas.assignee = karyawanId;

				return this.tugasRepository.save(tugas);			
			}	
		} catch(e) {
			throw new NotFoundException('id not found');
		}		
	}

	async deleteTugas(id: number) {
		try {
			await this.tugasRepository.delete(id);
			return;
		} catch(e) {
			throw new NotFoundException('id not found');
		}
	}
}
