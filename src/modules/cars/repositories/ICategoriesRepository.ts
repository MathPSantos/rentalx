import { Category } from "../entities/Category";

interface ICreateCateforyDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCateforyDTO): Promise<void>;
  findByName(name: string): Promise<Category>;
}

export { ICategoriesRepository };
