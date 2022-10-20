import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Karyawan } from '../../karyawan/entity/karyawan.entity';

@Entity()
export class Tugas extends BaseEntity {
	@PrimaryGeneratedColumn()
	public id: number;

	@ManyToOne(() => Karyawan, (karyawan) => karyawan.karyawans)
	public assignee: Karyawan;

	@Column()
	public title: string;

	@Column()
	public description: string;
}