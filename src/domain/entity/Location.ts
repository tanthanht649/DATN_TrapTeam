export interface Location {
  _id: string;
  province_id: {
    _id: string;
    name: string;
    image: string;
  };
  name: string;
  image: string;
  description: string;
  is_popular: Boolean;
}
