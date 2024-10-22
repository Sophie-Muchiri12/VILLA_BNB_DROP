import React from 'react';   
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function NavBar() {
    

    return (
        <AppBar position="static" sx={{ 
            background: 'transparent', // Fully transparent background
            boxShadow: 'none', // No shadow for a clean, minimal look
        }}>
            <Toolbar>
                <img 
                    src={`${process.env.PUBLIC_URL}/villabnblight.png`} 
                    alt="Villabnb Logo" 
                    style={{ width: 50, height: 50, marginRight: 16 }} 
                />
                <Typography 
                    variant="h6" 
                    sx={{ flexGrow: 1, fontWeight: 'bold', color: '#5c82a1', textTransform: 'uppercase', letterSpacing: '1.5px' }}
                >
                    Villabnb
                </Typography>
                {['/', '/home', '/listings', '/signup'].map((path, index) => (
                    <Button
                        key={index}
                        color="inherit"
                        component={Link}
                        to={path}
                        sx={{
                            marginLeft: 2,
                            borderRadius: '20px',
                            padding: '8px 15px',
                            fontWeight:'bold',
                            color: '#5c82a1', // Text color for visibility against the background image
                            transition: 'color 0.3s',
                            '&:hover': {
                                color: '#ffeb3b', // Highlighted color on hover
                            },
                        }}
                    >
                        {path === '/' ? 'Home' : path === '/home' ? 'Villas' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                    </Button>
                ))}
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
