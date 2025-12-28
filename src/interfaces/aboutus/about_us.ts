export interface AboutUs {
    createdBy:string,
    createdDate:string,
    database:string,
    description:string,
    descriptionEnglish:string,
    id:string,
    recordCount:string,
    status:string,
    subTitle:string,
    subTitleEnglish:string,
    title:string,
    titleEnglish:string,
    type:string,
    updatedBy:string,
    updatedDate:string | null
}

export interface AboutUsDetail {
    createdBy:string
    createdDate:Date| string
    database:string
    description:string
    descriptionEnglish:string
    id:number
    pathImage:string
    recordCount:number
    status:boolean
    title:string
    titleEnglish:string
    updatedBy:string | null
    updatedDate:Date | null | string
}