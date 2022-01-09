import  {EntityRepository, Repository} from "typeorm";
import Objetivo  from "../entities/Objetivo";

@EntityRepository(Objetivo)
export default class ObjetivoRepositories extends Repository<Objetivo>{

}