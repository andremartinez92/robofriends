import { RobotData } from '../types';

function filterRobotsBySearch(
  robots: RobotData[],
  search: string,
): RobotData[] {
  return robots.filter((robot: RobotData) =>
    robot.name.toLowerCase().includes(search.toLowerCase()),
  );
}

export default filterRobotsBySearch;
