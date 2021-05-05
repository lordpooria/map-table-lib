import { Action } from "easy-peasy";
export interface TimerStoreModel {
    displayDate: string;
    displayTime: Date | string;
    isAM: boolean;
    setDisplayDate: Action<TimerStoreModel, {
        displayDate: string;
        displayTime: Date | string;
        isAM: boolean;
    }>;
}
export declare const timerStoreModel: TimerStoreModel;
