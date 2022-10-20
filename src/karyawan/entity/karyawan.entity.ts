import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Tugas } from '../../tugas/entity/tugas.entity';

@Entity()
export class Karyawan extends BaseEntity {
	@PrimaryGeneratedColumn()
	public id: number;

	@Column()
	public name: string;

	@OneToMany(() => Tugas, (tugas) => tugas.assignee)
	public karyawans: Tugas[];
}