export interface Portfolio{
    createdBy: string | null,
    createdDate: string| null,
    database: string,
    id: number,
    images: Image[],
    recordCount: number,
    updatedBy: string | null,
    updatedDate: string| null,
}

export interface Image{
    hostUrl: string,
    id: number,
    name: string,
    pathImage: string,
    refId: number,
    size: number,
    type: string,
    typeImage: string,
}