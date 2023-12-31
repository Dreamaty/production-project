import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { ValidateProfileError } from '../../consts/consts';
import { fetchProfileData } from './fetchProfileData';

const profileValue = {
  firstName: 'Obi',
  lastName: 'Kenobi',
  age: 33,
  city: 'Tatuin',
  country: Country.Ukraine,
  currency: Currency.USD,
  avatar:
    'https://i.pinimg.com/originals/a3/9c/4a/a39c4a0ba379500392f6b2f19cf83587.jpg',
  username: 'Van',
};

describe('fetchProfileData', () => {
  test('Success to fetch profile data', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(
      Promise.resolve({ data: profileValue }),
    );

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profileValue);
  });

  test('should return error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(
      Promise.resolve({ stats: 404 }),
    );
    const result = await thunk.callThunk('1');

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe(
      ValidateProfileError.SERVER_ERROR,
    );
  });
});
