import { Repository, EntityRepository } from "typeorm";
import { Objetivo } from "../entities/Objetivo";

@EntityRepository(Objetivo)
class ObjetivoRepositories extends Repository<Objetivo>{

}export {ObjetivoRepositories}