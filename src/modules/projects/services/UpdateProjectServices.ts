import { injectable, inject } from 'tsyringe';

import IProjectRepository from '@modules/projects/infra/repositories/IProjectsRepository';

import Project from '@modules/projects/infra/typeorm/entities/Projects';

import AppError from '@shared/infra/http/error/AppError';

interface Request {
  id: string;
  name: string;
  user_id: string;
  navers: any;
}

@injectable()
export default class UpdateProjectServices {
  constructor(
    @inject('ProjectRepository')
    private projectRepository: IProjectRepository,
  ) {}

  public async execute({
    id,
    name,
    user_id,
    navers,
  }: Request): Promise<Project> {
    const project = await this.projectRepository.findProject({
      where: { id },
    });

    if (!project?.name) {
      throw new AppError('Project not found');
    }

    if (project?.user_id !== user_id) {
      throw new AppError('This Project does not belong to you');
    }

    project.name = name;
    project.user_id = user_id;
    project.navers = navers;

    return this.projectRepository.update(project);
  }
}
