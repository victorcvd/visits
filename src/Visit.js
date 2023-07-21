import React from 'react';
import { Card, CardHeader, CardContent, Typography, Button, List, ListItem, ListItemIcon } from '@mui/material';
import { Home as HomeIcon, Event as EventIcon, AccessTime as TimeIcon } from '@mui/icons-material';
import './Visit.css';

const Visit = ({ item }) => {
    return (
        <Card className="visit-card">
            <CardHeader 
                title={<Typography variant="h4">{item.name}</Typography>} 
                subheader={
                    <div>
                        <Typography variant="h6">{item.phone}</Typography>
                        <Typography variant="h6">{item.email}</Typography>
                    </div>
                }
            />
            <CardContent>
                <List>
                    <ListItem>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <Typography variant="body1">{item.itemId}</Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><EventIcon /></ListItemIcon>
                        <Typography variant="body1">{item.schedulingDate}</Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><TimeIcon /></ListItemIcon>
                        <Typography variant="body1">{item.schedulingTimeFrom}</Typography>
                    </ListItem>
                </List>
                <Button variant="contained" color="primary">Editar</Button>
            </CardContent>
        </Card>
    );
};

export default Visit;
