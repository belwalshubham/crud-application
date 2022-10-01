export interface Task{
	id:string,
	title:string,
	description:string,
	status:TaskStatus
}

export enum TaskStatus{
	DONE='DONE',
	IN_PROGRSS='IN_PROGRSS',
	OPEN='OPEN'
}