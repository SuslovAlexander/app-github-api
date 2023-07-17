export interface ITransformedRepo {
    id: string;
    url: string;
    name: string;
    primaryLanguage: string;
    viewerHasStarred: boolean;
}

export type TPartialRepo = Partial<ITransformedRepo>;

