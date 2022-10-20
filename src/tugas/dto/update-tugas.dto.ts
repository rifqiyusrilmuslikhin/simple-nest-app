import { IsNotEmpty } from 'class-validator';

export class UpdateTugasDto {
	@IsNotEmpty()
	assignee: number;

	@IsNotEmpty()
	title: string;

	@IsNotEmpty()
	description: string;
}