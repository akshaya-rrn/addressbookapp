import renderer from 'react-test-renderer';
import AddressBook from '../AddressBook';


describe('Address Book Component', () => {

  test('renders correctly', () => {
  const tree = renderer.create(<AddressBook/>).toJSON();
  expect(tree).toMatchSnapshot();
});

})

