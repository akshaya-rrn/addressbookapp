import renderer from 'react-test-renderer';

import { BrowserRouter as Router } from 'react-router-dom';
import { UsersCard } from '../UserCard';
import { mockgetUsersResponse } from './mockData/getUsersData';


describe('UsersCard Component', () => {

  it('Users Card component is rendered correctly', () => {
    var response = JSON.parse(JSON.stringify(mockgetUsersResponse));
    const tree = renderer.create(<Router><UsersCard usersData={response.results}/></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

