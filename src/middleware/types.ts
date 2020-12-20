import { RobotData } from '../types';
import {
  CHANGE_SEARCH_FIELD_TYPE,
  GET_ROBOTS_FAILURE_TYPE,
  GET_ROBOTS_REQUEST_TYPE,
  GET_ROBOTS_SUCCESS_TYPE,
} from './constants';

// States
export interface SearchRobotsState {
  searchField: string;
}

export interface RobotsState {
  isPending: boolean;
  robots: Array<RobotData>;
  error: string;
}

// Actions
export interface Action {
  type: string;
  payload: Record<string, unknown>;
  meta?: Record<string, unknown>;
}

export interface SearchRobotsAction {
  type: typeof CHANGE_SEARCH_FIELD_TYPE;
  payload: {
    searchField: string;
  };
}

export interface SuccessGetRobotsAction {
  type: typeof GET_ROBOTS_SUCCESS_TYPE;
  payload: {
    robots: Array<RobotData>;
  };
}

export interface RequestGetRobotsAction {
  type: typeof GET_ROBOTS_REQUEST_TYPE;
  payload?: Record<string, unknown>;
}

export interface FailureGetRobotsAction {
  type: typeof GET_ROBOTS_FAILURE_TYPE;
  payload: {
    error: string;
  };
}
