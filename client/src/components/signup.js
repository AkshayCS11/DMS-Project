import React, {useState} from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';

const Signup = () => {
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 20 }

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <FormControl component="fieldset">
                    <TextField name="name" fullWidth label='Name' placeholder="Enter your name"/>
                    <TextField name="email" fullWidth label='Email' placeholder="Enter your email"/>
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup name="gender" aria-label="gender" name="gender" style={{ display: 'initial' }} >
                            <FormControlLabel value="female" control={<Radio />} label="Female"/>
                            <FormControlLabel value="male" control={<Radio />} label="Male"/>
                        </RadioGroup>
                    </FormControl>
                    <TextField name="phoneNumber" fullWidth label='Phone Number' placeholder="Enter your phone number"/>
                    <TextField name="password" fullWidth label='Password' placeholder="Enter your password"/>
                    <TextField name="confirmPassword" fullWidth label='Confirm Password' placeholder="Confirm your password"/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                </FormControl>    
            </Paper>
            <Typography className="result-json"></Typography>
        </Grid>
        
        
)
}

export default Signup;