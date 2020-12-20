import React from 'react';

import Header from './Header';
import SearchBox from './SearchBox';
import RobotsList from './RobotsList';

import { RobotData } from '../types';

import './RobotsScreen.css';

interface Props {
    isPending: boolean,
    onSearchChange: (searchField: string) => void,
    robots: RobotData[],
}

function RobotsScreen({
    isPending,
    onSearchChange,
    robots
}: Props) {
    return (
        <div className="tc">
            <Header />
            <SearchBox onSearchChange={onSearchChange} />
            <RobotsList isPending={isPending} robots={robots} />
        </div>
    );
}

export default RobotsScreen;