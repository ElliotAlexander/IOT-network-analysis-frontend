import * as deviceActions from 'misc/redux-actions/device-actions';

describe('actions', () => {
  it('should perform a basic set', () => {
    const expectedAction = {
      type: 'SET',
      device: 'test',
    };
    expect(deviceActions.setDevice('test')).toEqual(expectedAction);
  });
});
