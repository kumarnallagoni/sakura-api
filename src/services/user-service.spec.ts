import {testSapi} from '../../spec/helpers/sakura-api';
import {UserService} from './user-service';

describe('UserService tests', () => {
  const sapi = testSapi({
    providers: [UserService]
  });

  it('UserService', () => {
    pending('not implemented');
  });
});
