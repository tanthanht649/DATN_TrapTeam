import { User } from "./User"
export interface Blog {
    _id: string,
    user_id: User,
    content: string,
    image: string,
    created_at: Date,
    status: boolean
}
