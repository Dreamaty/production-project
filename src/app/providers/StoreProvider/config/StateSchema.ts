import { CounterSchema } from 'entities/Counter'

export interface CounterState {
	value: number
}

export interface StateSchema {
	counter: CounterSchema
}
