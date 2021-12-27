import  {EntityRepository, Repository} from "typeorm";
import Tipo from "../entities/Tipo";

@EntityRepository(Tipo)
export default class TipoRepositories extends Repository<Tipo>{

}