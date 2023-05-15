export interface itemDTO {
  name: string;
  img: string;
}

export interface CategoryDTO {
  name: string;
  items: itemDTO[];
}
