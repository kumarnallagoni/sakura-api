import { SakuraApi } from '@sakuraapi/core';
export { SakuraApi };
export declare class UserService extends {
    sapi: SakuraApi;
    sapiConfig: any;
} {
    coins: number;
    private config;
    private log;
    constructor();
    addCoins(increment?: number): number;
}
