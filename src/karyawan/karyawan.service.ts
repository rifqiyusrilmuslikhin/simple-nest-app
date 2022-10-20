import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateKaryawanDto } from './dto/create-karyawan.dto';
import { UpdateKaryawanDto } from './dto/update-karyawan.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Karyawan } from './entity/karyawan.entity';

@Injectable()
export class KaryawanService {
	constructor (
		@InjectRepository(Karyawan) 
		private readonly karyawanRepository: Repository<Karyawan>
		) {}

	async getAllKaryawan(): Promise<Karyawan[]> {
		return await this.karyawanRepository.find();
	}

	async addKaryawan(data: CreateKaryawanDto): Promise<Karyawan> {
	 	try {
	 		const karyawan = new Karyawan();
	 		karyawan.name = data.name;

	 		return this.karyawanRepository.save(karyawan);
	 	} catch(e) {
	 		throw new InternalServerErrorException('gagal menambahkan karyawan');
	 	}
	}

	async getKaryawanById(karyawanId: number): Promise<Karyawan> {
		try {
			return await this.karyawanRepository.findOneBy({id: karyawanId});
		} catch(e) {
			throw new NotFoundException('id not found');
		}
	}

	async updateKaryawan(id: number, data: UpdateKaryawanDto): Promise<Karyawan> {
		try {
			const karyawan = await this.getKaryawanById(id);
			karyawan.name = data.name;
			return this.karyawanRepository.save(karyawan);
		} catch(e) {
			throw new NotFoundException('id not found');
		}
	}

	async deleteKaryawan(id: number) {
		try {
			await this.karyawanRepository.delete(id);
			return;
		} catch(e) {
			throw new NotFoundException('id not found');
		}
	}
}
