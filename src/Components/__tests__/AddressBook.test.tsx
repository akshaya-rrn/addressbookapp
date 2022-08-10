import { render, waitFor } from '@testing-library/react';
import renderer from 'react-test-renderer';
import AddressBook from '../AddressBook';
import { mockgetUsersResponse } from './mockData/getUsersData';

// Reference : https://stackoverflow.com/questions/64844580/jest-mocking-typeerror-axios-get-mockresolvedvalue-is-not-a-function
//Note: In order to mock properly, Jest needs jest.mock('moduleName') to be in the same scope as the require/import statement.
  const axios = require('axios');
  jest.mock('axios');
  const mockedAxios = axios as jest.MockedFunction<typeof axios>;

describe('Address Book Component', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<AddressBook />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('render UsersCard component', async () => {
    let { getByTestId } = render(<AddressBook />);
    // mock axios promise
    mockedAxios.mockImplementationOnce(() => Promise.resolve(JSON.parse(JSON.stringify(mockgetUsersResponse))));
      
    await waitFor(() => {
      // eslint-disable-next-line testing-library/prefer-screen-queries
      expect(getByTestId('addressbook')).toBeVisible();   
    });
  });

  test('render Error component when API throws error', async () => {
    let { getByTestId,  } = render(<AddressBook />);
   
    // mock axios promise
    mockedAxios.mockImplementationOnce(() => Promise.reject(new Error("API Error thrown")));
    
    await waitFor(() => {
      // eslint-disable-next-line testing-library/prefer-screen-queries
      expect(getByTestId('errorcomponent')).toBeVisible();   
    });
  });
});
