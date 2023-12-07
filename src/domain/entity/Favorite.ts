import {Tour} from './Tour';

export interface Favorite {
  _id: string;
  user_id: string;
  tour_id: Tour;
}
