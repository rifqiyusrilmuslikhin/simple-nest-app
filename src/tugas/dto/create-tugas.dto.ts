import { IsNotEmpty } from 'class-validator';

export class CreateTugasDto {
	@IsNotEmpty()
	assignee: number;

	@IsNotEmpty()
	title: string;

	@IsNotEmpty()
	description: string;
}