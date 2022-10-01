import { Controller, Post, Get,Param, Body,Delete ,Patch } from '@nestjs/common';
import { get } from 'http';
import { Task, TaskStatus } from 'task.model';
import { brotliCompressSync } from 'zlib';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskservice: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskservice.getAllTask();
  }

  @Delete('/:id')
  deleteTask(@Param('id') id:string) {
	this.taskservice.deleteTask(id);
	return `Task ${id} is deleted`

  }
  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.taskservice.getTaskById(id);
  }

  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Task {
    return this.taskservice.createTask(title, description);
  }

  @Patch('/:id')
  updateTaskstatus(@Param('id') id:string,
	@Body('status') status:TaskStatus){
		return this.taskservice.updateTaskstatus(id,status)
	}
  }
