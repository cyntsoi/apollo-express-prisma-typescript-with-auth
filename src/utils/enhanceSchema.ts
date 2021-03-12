import {
    ResolversEnhanceMap,
    applyResolversEnhanceMap, UserRole,
} from "../__generated__";
import {Authorized} from "type-graphql";

const resolversEnhanceMap: ResolversEnhanceMap = {
    User: {
        users: [Authorized()],
        deleteUser: [Authorized(UserRole.ADMINISTRATOR)]
    },
};

export default () => {
    applyResolversEnhanceMap(resolversEnhanceMap);
}