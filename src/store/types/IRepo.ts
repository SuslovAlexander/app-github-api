export interface ITransformedRepo {
    id: string;
    url: string;
    name: string;
    primaryLanguage: string;
    viewerHasStarred: string;
}

export type TPartialRepo = Partial<ITransformedRepo>;

