export interface IServiceData{
    createdBy: string,
    createdDate: Date | string,
    database: string,
    description: string,
    descriptionEnglish: string,
    id: number,
    recordCount: number,
    status: boolean,
    subTitle: string,
    subTitleEnglish: string,
    title: string,
    titleEnglish: string,
    type: string,
    updatedBy: string | null,
    updatedDate: Date | null
}

export interface IServiceDetail{
    createdBy: string,
    createdDate: Date | string,
    database: string,
    description: string,
    descriptionEnglish: string,
    id: number,
    pathImage: string,
    recordCount: number,
    status: boolean,
    title: string,
    titleEnglish: string,
    updatedBy: string| null,
    updatedDate: Date | null  | string
}