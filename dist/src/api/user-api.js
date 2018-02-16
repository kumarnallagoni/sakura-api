"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@sakuraapi/core");
exports.SakuraApi = core_1.SakuraApi;
const user_model_1 = require("../models/user-model");
let UserApi = class UserApi extends core_1.SapiRoutableMixin() {
    getUsers(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let u;
            try {
                u = yield user_model_1.UserModel.get({ filter: {} });
            }
            catch (err) {
                u = { message: err.message };
            }
            res.send(u).status(200);
        });
    }
    somePostRoute(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = user_model_1.UserModel.fromJson(req.body);
            let u;
            try {
                u = yield user.create();
            }
            catch (err) {
                u = { message: err.message };
            }
            res.status(200).send(u);
            next();
        });
    }
    UpdateRecord(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.params.id) {
                res.status(400).send({ message: 'Invalid User id.' });
            }
            else {
                req.body.id = req.params.id;
                const user = user_model_1.UserModel.fromJson(req.body);
                let data;
                try {
                    data = yield user.save();
                }
                catch (err) {
                    data = { message: err.message };
                }
                res.status(200).send(data);
            }
            next();
        });
    }
    deleteRecord(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.params.id) {
                res.status(400).send({ message: 'invalid User id' });
            }
            else {
                let data;
                try {
                    data = yield user_model_1.UserModel.removeById(req.params.id);
                }
                catch (err) {
                    data = { message: err.message };
                }
                res.status(200).send(data);
            }
            next();
        });
    }
};
__decorate([
    core_1.Route({
        method: 'get',
        path: '/'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], UserApi.prototype, "getUsers", null);
__decorate([
    core_1.Route({
        method: 'post',
        path: ''
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], UserApi.prototype, "somePostRoute", null);
__decorate([
    core_1.Route({
        method: 'put',
        path: ':id'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], UserApi.prototype, "UpdateRecord", null);
__decorate([
    core_1.Route({
        method: 'delete',
        path: ':id'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], UserApi.prototype, "deleteRecord", null);
UserApi = __decorate([
    core_1.Routable({
        baseUrl: '/users',
        model: user_model_1.UserModel,
        suppressApi: true
    })
], UserApi);
exports.UserApi = UserApi;
//# sourceMappingURL=user-api.js.map