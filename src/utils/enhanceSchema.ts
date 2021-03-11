import {
    ResolversEnhanceMap,
    applyResolversEnhanceMap,
} from "../__generated__";
import { Authorized } from "type-graphql";

const resolversEnhanceMap: ResolversEnhanceMap = {
    User: {
        users: [Authorized()],
    },
};

export default () =>{
    applyResolversEnhanceMap(resolversEnhanceMap);
}