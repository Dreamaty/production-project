import { Country } from 'entity/Country/model/types/country'
import { Currency } from 'entity/Currency'

export interface Profile {
  
    firstName?: string,
    lastName?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string

}

export interface ProfileSchema {
  data?: Profile;
	form?: Profile
  isLoading?: boolean
  error?: string
  readonly: boolean
}