import {
    ResolversEnhanceMap,
    applyResolversEnhanceMap,
} from "../../prisma/generated/type-graphql";
import { Authorized } from "type-graphql";

const resolversEnhanceMap: ResolversEnhanceMap = {
    User: {
        users: [Authorized()],
    },
};

export default () =>{
    applyResolversEnhanceMap(resolversEnhanceMap);
}