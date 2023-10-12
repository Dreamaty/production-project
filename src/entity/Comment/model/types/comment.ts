import { User } from 'entity/User'

export interface Comment {
	id: string,
	text: string,
	user: User
}

export interface CommentSchema {
	data: Comment[],
}