// @flow
/* eslint-disable no-useless-concat */
import { RobotData } from '../types';

export const TITLE_TEXT = 'Robofriends';
export const LOADING_TEXT = 'Loading...';
export const NO_DATA_TEXT = 'Could not retrieve content' + 'Please check your internet connection.';

export const ROBOTS: RobotData[] = [
    {
        email: 'something@email.com',
        id: 1,
        name: 'Robo 1',
        username: 'robo1'
    },
    {
        email: 'random@email.com',
        id: 2,
        name: 'Robo 2',
        username: 'robo2'
    },
]

export const ROBO1_TEXT = 'Robo 1' + 'something@email.com';
export const ROBO2_TEXT = 'Robo 2' + 'random@email.com';
export const ROBOTS_TEXT = ROBO1_TEXT + ROBO2_TEXT;