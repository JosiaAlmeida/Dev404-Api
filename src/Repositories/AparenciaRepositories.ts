import { Repository, EntityRepository } from "typeorm";
import { Aparencia } from "../entities/Aparencia";

@EntityRepository(Aparencia)
class AparenciaRepositories extends Repository<Aparencia>{

}export {AparenciaRepositories}