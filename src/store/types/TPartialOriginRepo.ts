export interface IOriginRepo {
  node: {
    /**id репозитория */
    id: string;
    /**url репозитория */
    url: string;
    /**название репозитория */
    name: string;
    primaryLanguage: {
      /**название основного языка репозитория */
      name: string;
    } | null;
    /**есть ли репо в избранном */
    viewerHasStarred: string;
  };
}
