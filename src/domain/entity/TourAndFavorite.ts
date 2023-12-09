export interface TourAndFavorite {
  _id: string;
  province_id: {
    _id: string;
    name: string;
    image: string;
  };
  name: string;
  description: string;
  available_seats: Number;
  image: string;
  price: Number;
  departure_date: Date;
  departure_location: string;
  end_date: Date;
  status: Boolean;
  created_at: Date;
  is_popular: Boolean;
  schedules: Array<string>;
  locations: Array<string>;
  isFavorite: boolean;
}
