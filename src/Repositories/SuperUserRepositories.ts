import { Repository, EntityRepository } from "typeorm";
import { SuperUser } from "../entities/SuperUser";

@EntityRepository(SuperUser)
class SuperUserRepositories extends Repository<SuperUser>{

}export {SuperUserRepositories}