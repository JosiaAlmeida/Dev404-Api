import  {EntityRepository, Repository} from "typeorm";
import Aparencia from "../entities/Aparencia";

@EntityRepository(Aparencia)
export default class AparenciaRepositories extends Repository<Aparencia>{

}