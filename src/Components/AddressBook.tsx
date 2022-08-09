import { Alert, AlertTitle, Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { GetUsers } from '../services/users';
import { UserResponseResult } from '../types';
import { UsersCard } from './UserCard';


const ErrorComponent = () => {
    return <Alert severity="error">
    <AlertTitle>Invalid Request</AlertTitle>
        There is something wrong with the request — <strong>Please try again!</strong>
    </Alert>
};

function AddressBook() {
  const [users, setUsers] = useState<UserResponseResult[]>([]);
  const [showError, setError] = useState<boolean>(false);

  useEffect(() => {
    GetUsers().then((response) => {
    setError(false);
      setUsers(response);
    }).catch((err) => {
        setError(true);
    });
  }, []);


  return (
    <div>
      <Typography variant="h3" component={'h3'} alignContent="center">Address Book</Typography>
      <br/>
      <br/>
      { showError ? <ErrorComponent/> : null}
      { users.length > 0 ?  (
        <Box>
            <UsersCard usersData={users}/>
        </Box>) : null}
    </div>
  );
}

export default AddressBook;
