import userFormReducer, {
  UserFormState,
  setUserData,
  clearUserData
} from './userFormSlice';

describe('userForm reducer', () => {
  const initialState: UserFormState = {
    status: 'idle',
    metaData: null,
    userData: null
  };
  it('should handle initial state', () => {
    expect(userFormReducer(undefined, { type: 'unknown' })).toEqual({
      status: 'idle',
      metaData: null,
      userData: null
    });
  });

  it('should handle setUserData', () => {
    let sampleUserData = {}
    const actual = userFormReducer(initialState, setUserData(sampleUserData));
    expect(actual.userData).toEqual(sampleUserData);
  });

  it('should handle clearUserData', () => {
    const actual = userFormReducer(initialState, clearUserData());
    expect(actual.userData).toEqual(null);
  });
});
