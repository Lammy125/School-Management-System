import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { TextField }from '@material-ui/core';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(3),
    },

    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        marginBottom: theme.spacing(3),
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: theme.spacing(3),
    },

    textField: {
        margin: theme.spacing(1),
        width: '25ch',
    },

    input: {
        display: 'none',
    },

    button: {
        margin: theme.spacing(1),
    },
}));

const TeacherProfile = () => {
    const profile = useStyles();
    const [image, setImage] = useState(null);

    const details = useStyles();
    const [fullName, setFullName] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [teachingArea, setTeachingArea] = useState('');
    const [employmentYear, setEmploymentYear] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(URL.createObjectURL(file));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`FullName: ${fullName}, Employee Id: ${employeeId}, Teaching Area: ${teachingArea}, Employment Year: ${employmentYear}, Date of Birth: ${dateOfBirth}, Age: ${age}, Email: ${email}, Mobile No: ${mobileNo}, Gender: ${gender}, Address: ${address}`)
    }
  return (
    <div className={profile.root}>
        
        <Avatar className={profile.avatar} alt="Profile Image" src={image} />
        <input
            accept="image/*"
            className={profile.input}
            id="contained-button-file"
            multiple type="file"
            onChange={handleImageChange}
        />

        <label htmlFor='contained-button-file'>
            <Button
                className={profile.button}
                variant='contained'
                color='default'
                component='span'
                startIcon={<CloudUploadIcon />}
            >
                Upload Image
            </Button>
        </label>

        <form className={details.form} onSubmit={handleSubmit}>
            
            <TextField 
                className={details.textField}
                label='FullName'
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
            />

            <TextField 
                className={details.textField}
                label='Employee Id'
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
            />

            <TextField 
                className={details.textField}
                label='Teaching Area'
                value={teachingArea}
                onChange={(e) => setTeachingArea(e.target.value)}
            />

            <TextField 
                className={details.textField}
                label='Employment Year'
                value={employmentYear}
                onChange={(e) => setEmploymentYear(e.target.value)}
            />

            <TextField 
                className={details.textField}
                label='Date of Birth'
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
            />

            <TextField 
                className={details.textField}
                label='Age'
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />

<           TextField 
                className={details.textField}
                label='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <TextField 
                className={details.textField}
                label='Mobile No'
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
            />

            <TextField 
                className={details.textField}
                label='Gender'
                value={gender}
                onChange={(e) => setGender(e.target.value)}
            />

            <TextField 
                className={details.textField}
                label='Address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />

            <Button className={details.button} variant='contained' color='primary' type='submit'>
                Create Profile
            </Button>

        </form>

    </div>
  )
}

export default TeacherProfile