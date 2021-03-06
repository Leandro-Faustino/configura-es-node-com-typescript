import Projects from '@modules/projects/infra/typeorm/entities/Projects';
import IProjectsDTO, {
  IFindProject,
} from '@modules/projects/dtos/IProjectsDTO';

export default interface IProjectsRepository {
  create(data: IProjectsDTO): Promise<Projects>;
  findProjectUser(data: any): Promise<Projects | undefined>;
  findAllProject(data: any): Promise<Projects[] | undefined>;
  findOneProject(data: any): Promise<Projects | undefined>;
  findProject(data: IFindProject): Promise<Projects | undefined>;
  update(data: IProjectsDTO): Promise<Projects>;
  save(projects: IProjectsDTO): Promise<Projects>;
  delete(id: string): Promise<void>;
}
