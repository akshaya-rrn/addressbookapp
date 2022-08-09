import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';


import { UserDetailsPageContent } from '../UserDetailsPageContent';
import { mockUserData } from './mockData/getUsersData';


describe('Users Details Component when state data is undefined', () => {
  const mockLocationData = { pathname: '', state: null }

  beforeEach(() => {
    //useLocation.mockReturnValue(mockLocationData as any);
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useLocation: () => (mockLocationData)
    }));
  });

  it('Users Card component is rendered correctly when value passed as null', () => {
    const tree = renderer.create(<Router><UserDetailsPageContent /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Users Details Component when userData is passed', () => {
  const mockLocationData = { pathname: 'localhost:3000/detailedview', state: mockUserData }

  beforeEach(() => {
  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => (mockLocationData)
    }));
  });

  it('Users Card component is rendered correctly when value passed', () => {
    const tree = renderer.create(<Router><UserDetailsPageContent /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

