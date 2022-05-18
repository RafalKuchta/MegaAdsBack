export interface NewAdEntity extends Omit<AdEntity, 'id'>{
    id?: string;
}


export interface SimpleAdEntities {
    id: string;
    lat: number;
    lon: number;
}

export interface AdEntity extends SimpleAdEntities {
    name: string;
    description: string;
    price: number;
    url: string;
}
