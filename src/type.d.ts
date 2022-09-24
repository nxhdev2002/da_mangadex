export type ComicState = {
    id: string,
    name: string,
    desc:  {[key: string]: string},
    thumb: string,
    currentChap: string,
    createAt: string,
    updatedAt: string,
    availableTranslatedLanguages: Array<string>
}

export type ChapterState = {
    id: string,
    chapter: string
}