var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { TableColumn } from "typeorm";
export default class MoreDAtaUser1640306460112 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.addColumn("users", new TableColumn({
                name: "email",
                type: "varchar"
            }));
            yield queryRunner.addColumn("users", new TableColumn({
                name: "number",
                type: "varchar"
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropColumn("users", "email");
            yield queryRunner.dropColumn("users", "number");
        });
    }
}
//# sourceMappingURL=1640306460112-MoreDAtaUser.js.map