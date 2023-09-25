import { counterActions, counterReducer } from './counterSlice';
describe('counterSlice', function () {
    test('should increment', function () {
        var state = { value: 0 };
        expect(counterReducer(state, counterActions.increment())).toEqual({
            value: 1,
        });
    });
    test('should decrement', function () {
        var state = { value: 0 };
        expect(counterReducer(state, counterActions.decrement())).toEqual({
            value: -1,
        });
    });
    test('should work with empty state', function () {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({
            value: 1,
        });
    });
});
