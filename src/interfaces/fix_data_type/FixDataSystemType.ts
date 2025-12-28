export interface FixDataSystemType{
    name:string,
    englishName:string,
    subTitle:string,
    subEnglishTitle:string,
    description:string,
    descriptionEnglish:string,
    phone:string,
    phone1:string,
    email:string,
    facebook:string,
    telegram:string,
    youtube:string,
    services:ServiceType
}

interface ServiceType{
    label:string,
    labelEnglish:string,
    description:string,
    descriptionEnglish:string,
    serviceDetail:ServiceDetailType[]
}

interface ServiceDetailType{
    pathImage: string,
    title: string,
    titleEnglish: string,
    description:string,
    descriptionEnglish:string,
}