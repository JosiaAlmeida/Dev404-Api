import  {EntityRepository, Repository} from "typeorm";
import Qualidade from "../entities/Qualidade";

@EntityRepository(Qualidade)
export default class QualidadeRepositories extends Repository<Qualidade>{

}