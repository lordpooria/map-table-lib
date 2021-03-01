import { action, Action } from "easy-peasy";

type AvailableTimes = Array<number>;

export interface PlayerStoreModel {
  availableTimes: AvailableTimes;

  setAvailableTime: Action<PlayerStoreModel>;
}

export const playerStoreModel: PlayerStoreModel = {
  availableTimes: [],

  setAvailableTime: action(() => {}),
};
