import {Routable, SakuraApi, SapiRoutableMixin} from '@sakuraapi/core';
import {UserModel} from '../models/user-model';

export {SakuraApi};

@Routable({
  baseUrl: '/users',
  model: UserModel
})
export class UserApi extends SapiRoutableMixin() {

}
