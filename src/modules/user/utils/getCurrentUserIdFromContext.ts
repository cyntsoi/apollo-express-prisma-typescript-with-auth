import {Context} from "../../../utils/createContext";

export default (context: Context) => {
    // @ts-ignore
    return context.req.session?.user
}