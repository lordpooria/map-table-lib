import { Action } from "easy-peasy";
declare type AvailableTimes = Array<number>;
export interface PlayerStoreModel {
    availableTimes: AvailableTimes;
    setAvailableTime: Action<PlayerStoreModel>;
}
export declare const playerStoreModel: PlayerStoreModel;
export {};
