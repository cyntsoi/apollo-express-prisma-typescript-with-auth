import {Context} from "../../../utils/context";

export default (context: Context) => {
    // @ts-ignore
    return context.req.session?.user
}