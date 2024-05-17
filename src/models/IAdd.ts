export interface ISport {
  id: number;
  title: string;
  image: string;
}

interface ISeason {
  title_uz: string;
  title_ru: string;
  title_en: string;
}

export interface IAdd {
  id: number;
  rating: number;
  price: number;
  is_favorite: boolean;
  title: string;
  ad_type: string;
  description: string;
  landmark: string;
  image: string;
  images: string[];
  location: ILocation;
  season: ISeason;
}

interface IUser {
  id: number;
  role_id: number;
  status: boolean | null;
  first_name: string | null;
  last_name: string | null;
  birthday: string | null;
  district_id: string | null;
  gender: string | null;
  remember_token: string | null;
  phone: string | null;
  phone_verified_at: string | null;
}

export interface ILocation {
  latitude: number;
  longitude: number;
}

export interface IPhones {
  name: string;
  phone: string;
}

interface IInfrastructure {
  id: number;
  active: number;
  title: string;
}

interface IPrice {
  name: string;
  price: number;
}

export interface IDetailAdd extends IAdd {
  age_begin: number;
  age_end: number;
  ground_size: string;
  prices: IPrice[];
  user: IUser;
  phones: IPhones[];
  infrastructure: IInfrastructure[];
  sport: ISport[];
}

export interface IPagination {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
}
