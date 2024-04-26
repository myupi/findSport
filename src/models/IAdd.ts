interface ISport {
  id: number;
  title: string;
  image: string;
}

export interface IAdd {
  id: number;
  title: string;
  description: string;
  rating: number;
  price: number;
  landmark: string;
  is_favorite: boolean;
  image: string;
  sport: ISport;
}
