export interface IOriginRepo {
    node: {
        id: string;
        url: string;
        name: string;
        primaryLanguage: { name: string } | null;
        viewerHasStarred: boolean;
    }

}

export type TPartialOriginRepo = Partial<IOriginRepo>;

