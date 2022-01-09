import  {EntityRepository, Repository} from "typeorm";
import Pacote  from "../entities/Pacote";

@EntityRepository(Pacote)
export default class PacoteRepositories extends Repository<Pacote>{

}