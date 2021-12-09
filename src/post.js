import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function TextFields() {
    const [id,setId]=React.useState()
    const [title,settitle]=React.useState()
    const [body,setbody]=React.useState()
    function post() {

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                title:title,
                body:body
            }),
        })
            .then((res) => res.json())
            .catch((err) => console.log('error'))

    }
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <Link to="/"><h3 style={{color:'blue'}}>Back</h3></Link>
            <div style={{ position: 'absolute', top: '10%', left: '30%' }}>
                <h3>Post a new Post </h3>
                <TextField id="outlined-basic" label="id" variant="outlined" onChange={(e)=>setId(e.target.value)
                } />
                <div style={{paddingTop:'1rem',paddingBottom:'1rem'}}>
                <TextField id="outlined-basic" label="Title" variant="outlined" 
                 onChange={(e)=>settitle(e.target.value)}
                />
                </div>
                <TextField
                    id="outlined-multiline-static"
                    label="Body"
                    multiline
                    rows={4}
                    onChange={(e)=>setbody(e.target.value)}
                />
                <div style={{ marginTop: '1rem' }}>
                    <Button variant="contained" onClick={post}>Submit</Button>
                </div>
            </div>
        </Box>
    );
}