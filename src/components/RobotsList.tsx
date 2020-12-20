import React from 'react';

import { RobotData } from '../types';
import CardList from './CardList';
import ScrollableSection from './ScrollableSection';
import ErrorBoundary from './ErrorBoundary';

function RobotsList({ isPending, robots }: { isPending: boolean, robots: RobotData[] }) {
    if (isPending) {
        return <h1>Loading...</h1>
    }

    if (!robots || !robots.length) {
        return (
            <>
                <h2>Could not retrieve content</h2>
                <div>Please check your internet connection.</div>
            </>
        )
    }

    return (
        <ScrollableSection>
            <ErrorBoundary>
                <CardList robots={robots} />
            </ErrorBoundary>
        </ScrollableSection>
    )
}


export default RobotsList;
