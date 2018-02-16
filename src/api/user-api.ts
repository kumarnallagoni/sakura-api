import {Routable, Route, SakuraApi, SapiRoutableMixin} from '@sakuraapi/core';
import {NextFunction, Request, Response} from 'express';
import {UserModel} from '../models/user-model';

export {SakuraApi};

@Routable({
  baseUrl: '/users',
  model: UserModel,
  suppressApi: true
})
export class UserApi extends SapiRoutableMixin() {
  @Route({
    method: 'get',
    path: '/'
  })
  async getUsers(req: Request, res: Response, next: NextFunction) {
    let u;
    try {
      u = await  UserModel.get({filter: {}});
    } catch (err) {
      u = {message: err.message};
    }
    res.send(u).status(200);
  }

  @Route({
    method: 'post',
    path: ''
  })
  async somePostRoute(req: Request, res: Response, next: NextFunction) {
    const user = UserModel.fromJson(req.body);
    let u;
    try {
      u = await user.create();
    } catch (err) {
      u = {message: err.message};
    }
    res.status(200).send(u);
    next();
  }

  @Route({
    method: 'put',
    path: ':id'
  })
  async UpdateRecord(req: Request, res: Response, next: NextFunction) {
    if (!req.params.id) {
      res.status(400).send({message: 'Invalid User id.'});
    } else {
      req.body.id = req.params.id;
      const user = UserModel.fromJson(req.body);
      let data;
      try {
        data = await user.save();
      } catch (err) {
        data = {message: err.message};
      }
      res.status(200).send(data);
    }

    next();
  }

  // Delete
  @Route({
    method: 'delete',
    path: ':id'
  })
  async deleteRecord(req: Request, res: Response, next: NextFunction) {
    if (!req.params.id) {
      res.status(400).send({message: 'invalid User id'});
    } else {
      let data;
      try {
        data = await UserModel.removeById(req.params.id);
      } catch (err) {
        data = {message: err.message};
      }
      res.status(200).send(data);
    }
    next();
  }
}
