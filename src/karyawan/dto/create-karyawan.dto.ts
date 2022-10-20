import { IsNotEmpty } from 'class-validator';

export class CreateKaryawanDto {
	@IsNotEmpty()
	name: string;
}