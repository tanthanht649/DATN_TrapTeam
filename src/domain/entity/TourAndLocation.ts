import {Location} from './Location';

export interface TourAndLocation {
  _id: string;
  province_id: {
    _id: string;
    name: string;
    image: string;
  };
  name: string;
  description: string;
  available_seats: number;
  image: string;
  price: number;
  departure_date: Date;
  departure_location: string;
  end_date: Date;
  status: boolean;
  created_at: Date;
  is_popular: boolean;
  schedules: Array<string>;
  locations: Location[];
}
