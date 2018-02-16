/// <reference types="express" />
import { SakuraApi } from '@sakuraapi/core';
import { NextFunction, Request, Response } from 'express';
export { SakuraApi };
export declare class UserApi extends {
    sapi?: SakuraApi;
    sapiConfig?: any;
} {
    getUsers(req: Request, res: Response, next: NextFunction): Promise<void>;
    somePostRoute(req: Request, res: Response, next: NextFunction): Promise<void>;
    UpdateRecord(req: Request, res: Response, next: NextFunction): Promise<void>;
    deleteRecord(req: Request, res: Response, next: NextFunction): Promise<void>;
}
