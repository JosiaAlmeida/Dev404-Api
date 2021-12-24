import { Repository, EntityRepository } from "typeorm";
import { Qualidade } from "../entities/Qualidade";

@EntityRepository(Qualidade)
class QualidadeRepositories extends Repository<Qualidade>{

}export {QualidadeRepositories}