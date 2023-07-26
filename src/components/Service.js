import React from 'react';
import { Card, CardHeader, CardContent, Typography, Button, List, ListItem, ListItemIcon } from '@mui/material';
import { Home as HomeIcon, Event as EventIcon, MarkUnreadChatAlt, ExitToApp } from '@mui/icons-material';
import './Service.css';

const Service = ({ item }) => {

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
                        <Typography variant="body1">{item.property}</Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><EventIcon /></ListItemIcon>
                        <Typography variant="body1">{item.visit_date}</Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><ExitToApp /></ListItemIcon>
                        <Typography variant="body1">{item.exit_reason}</Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><MarkUnreadChatAlt /></ListItemIcon>
                        <Typography variant="body1">{item.comment}</Typography>
                    </ListItem>
                </List>
                <Button variant="contained" color="primary">Editar</Button>
            </CardContent>
        </Card>
    );
};

export default Service;
