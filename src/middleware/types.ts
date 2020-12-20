import { RobotData } from '../types';
import { GET_ROBOTS_TYPES } from './constants';

// States
export interface SearchRobotsState {
    searchField: string,
  };


export interface RobotsState {
    isPending: boolean,
    robots: Array<RobotData>,
    error: string,
  };
  
// Actions
export interface Action {
  type: string,
  payload: Object,
  meta?: Object,
};


  export interface SearchRobotsAction {
    type: string,
    payload: {
      searchField: string,
    }
  }
  
export interface SuccessGetRobotsAction {
    type: typeof GET_ROBOTS_TYPES.SUCCESS,
    payload: {
      robots: Array<RobotData>
    }
  }
  
  export interface RequestGetRobotsAction {
    type: typeof GET_ROBOTS_TYPES.REQUEST,
    payload?: any,
  }
  
  export interface FailureGetRobotsAction {
    type: typeof GET_ROBOTS_TYPES.FAILURE,
    payload: {
      error: string
    }
  }
  