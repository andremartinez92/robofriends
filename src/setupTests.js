// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// Enzyme
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// Enzyme snapshots
import { createSerializer } from 'enzyme-to-json';

configure({ adapter: new Adapter() });

// jest-fetch-mock
require('jest-fetch-mock').enableMocks();

// Enzyme snapshots
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
