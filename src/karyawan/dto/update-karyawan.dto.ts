import { IsNotEmpty } from 'class-validator';

export class UpdateKaryawanDto {
	@IsNotEmpty()
	name: string;
}