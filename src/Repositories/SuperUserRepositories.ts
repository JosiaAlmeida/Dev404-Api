import  {EntityRepository, Repository} from "typeorm";
import SuperUser from "../entities/SuperUser";

@EntityRepository(SuperUser)
export default class SuperUserRepositories extends Repository<SuperUser>{

}