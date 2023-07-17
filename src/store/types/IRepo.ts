export interface ITransformedRepo {
    id: string;
    url: string;
    name: string;
    primaryLanguage: string;
    viewerHasStarred: boolean;
    cursor: string | null;
}

export type TPartialRepo = Partial<ITransformedRepo>;

