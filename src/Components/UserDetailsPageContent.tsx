import { Alert, AlertTitle, Box, Typography } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserResponseResult } from '../types';
import { formatDOB, getUserName } from '../utility/Utils';

interface UserDetailedContentType {
    user?: UserResponseResult | null;
}

export const UserDetailsPageContent: React.FC = () => {

    const location = useLocation();
    const stateData = location.state as UserDetailedContentType ;
    if (stateData == null) {
        return <AlertComponent/>
    }
    const { name, cell, dob } = stateData.user as UserResponseResult;
    
    return <Link to='/detailedview'>
    <Box sx={{ maxWidth: 400}} >
        <Typography id="name" variant="h6" component="div">Name : {getUserName(name)}</Typography>
        <Typography id="cell-number" sx={{ mt: 2 }}>Cell :{cell}</Typography>
        <Typography id="DOB" sx={{ mt: 2 }}>DOB :{formatDOB(dob.date)}</Typography>
    </Box>
    </Link>; 
}

const AlertComponent: React.FC = () => {
    return <Alert severity="warning">
    <AlertTitle>Invalid Request</AlertTitle>
    There is something wrong with the request — <strong>Please try again!</strong>
  </Alert>
}