export interface BookingTour {
  _id: string;
  user_id: string;
  tour_id: {
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
    departure_date: string;
    departure_location: string;
    end_date: string;
    status: boolean;
    created_at: string;
    is_popular: boolean;
    schedules: string[];
    locations: string[];
  };
  discount: number;
  created_at: string;
  adult_count: number;
  child_count: number;
  price: number;
  note: string;
  role: boolean;
  location_custom: string[];
}
