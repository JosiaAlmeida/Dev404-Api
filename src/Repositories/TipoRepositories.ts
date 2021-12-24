import { Repository, EntityRepository } from "typeorm";
import { Tipo } from "../entities/Tipo";

@EntityRepository(Tipo)
class TipoRepositories extends Repository<Tipo>{

}export {TipoRepositories}