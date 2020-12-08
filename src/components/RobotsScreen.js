// @flow
import React from 'react';

import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import RobotsList from '../components/RobotsList';

import { type RobotData } from '../types';

import './RobotsScreen.css';

type Props = {
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