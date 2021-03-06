import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth'

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [sucess, setSuccess] = useState(false);
    const { token } = useAuth()
    const handleOnBlur = e => {
        setEmail(e.target.value)
        e.preventDefault();
    }



    const handleAdminSubmit = e => {
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                   
                    setEmail('')
                    setSuccess(true)

                }

            })

        e.preventDefault()
    }
    return (
        <div>
            <h2>Make me Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '30%' }}
                    label="Email"
                    type="email"
                    name="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {sucess && <Alert severity="success">Admin Added Successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;