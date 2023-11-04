import type { Country } from '@/entity/Country'
import type { Currency } from '@/entity/Currency'

export interface Profile {
	id?: string
	firstName?: string,
	lastName?: string,
	age?: number,
	currency?: Currency,
	country?: Country,
	city?: string,
	username?: string,
	avatar?: string
}

