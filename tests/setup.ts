// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
// workaround: https://github.com/testing-library/jest-dom/issues/427#issuecomment-1110985202
import '@testing-library/jest-dom/extend-expect';

import { server } from '../src/mocks/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
