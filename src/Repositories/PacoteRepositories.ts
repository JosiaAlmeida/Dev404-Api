import { Repository, EntityRepository } from "typeorm";
import { Pacote } from "../entities/Pacote";

@EntityRepository(Pacote)
class PacoteRepositories extends Repository<Pacote>{

}export {PacoteRepositories}