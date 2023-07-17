import { IOriginRepo } from "../store/types/TPartialOriginRepo";

export const getReposFromPayload = (payload: IOriginRepo[]) => {
    return payload.map((item) => ({
        id: item.node.id,
        url: item.node.url,
        name: item.node.name,
        primaryLanguage: item.node.primaryLanguage?.name,
        viewerHasStarred: item.node.viewerHasStarred,
    }))
} 