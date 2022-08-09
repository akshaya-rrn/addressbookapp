import { CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import React from 'react';
import { Link } from 'react-router-dom';
import { UserResponseResult } from '../types';
import { getUserName } from '../utility/Utils';

interface UsersCardComponentProps {
  usersData: UserResponseResult[];
}

interface DisplayCardProps {
    userInfo: UserResponseResult;
}

export const UsersCard: React.FC<UsersCardComponentProps> = ({usersData}: UsersCardComponentProps) => {
    
    const DisplayUserCard: React.FC<DisplayCardProps> = ({userInfo} : DisplayCardProps) => {
        const { name, picture, email } = userInfo;
        
        return (
            <Card sx={{ maxWidth: 300 }}>
            <CardMedia component="img" height="140" src={picture.medium} />
            <CardContent>
            <Typography gutterBottom variant="h6" component="div">{getUserName(name)}</Typography>
            <Typography variant="body2" color="text.secondary">{email}<br/>
            </Typography>
            <CardActionArea>
              <br/>
                <Link to="/detailedview" state={{user: userInfo}}> Click for Details </Link>
            </CardActionArea>
            </CardContent>
        </Card>  
        );
  };

  return (
    <Grid id="useraddressbook" container spacing={5}>
      {usersData.map((user, index) => (
        <Grid key={index} item xs={2}>
          <DisplayUserCard userInfo={user} />
        </Grid>
      ))}
    </Grid>
  );
};
