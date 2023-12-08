export interface Review {
  _id: string;
  user_id: {
    _id: string;
    name: string;
    avatar: string;
  };
  tour_id: string;
  content: string;
  created_at: string;
}
