// @flow

export type Action = {
  type: string,
  payload: Object,
  meta?: Object,
};

export type RobotData = {
  email: string,
  id: number,
  name: string,
  username: string,
};
