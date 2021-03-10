import {Context} from "../../../utils/createContext";
import getPrismaFromContext from "../../../utils/getPrismaFromContext";
import getCurrentUserIdFromContext from "./getCurrentUserIdFromContext";

export default async (context: Context) => {
    const id = getCurrentUserIdFromContext(context)
    return id ? await getPrismaFromContext(context).user.findFirst({where: {id}}) : null;
}