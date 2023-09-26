import { CounterSchema } from 'entity/Counter'
import { UserSchema } from 'entity/User'
import { LoginSchema } from 'features/AuthByUsername'

export interface StateSchema {
	counter: CounterSchema
	user: UserSchema
	loginForm: LoginSchema
}
