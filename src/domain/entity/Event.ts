export interface Event {
  _id: string;
  image: string;
  title: string;
  province_id: {
    _id: string;
    name: string;
  };
}
