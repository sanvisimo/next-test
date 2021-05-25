import type { NextPage } from 'next'
import {
    Container,
    createStyles,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    OutlinedInput, TextField, Theme,
    Typography
} from "@material-ui/core";
import Layout from "../components/layouts/Layout";
import React from "react";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        margin: {

        },
        withoutLabel: {
            marginTop: theme.spacing(3),
        },
        textField: {
            width: '25ch',
            margin: theme.spacing(1),
        },
    }),
);


interface State {
    email: string;
    password: string;
    showPassword: boolean;
}

const LoginPage: NextPage = () => {
    const classes = useStyles();

    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        showPassword: false,
    });

    const [error, setError] = React.useState(false)

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setError(!event.target.value);
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleSubmit = async () => {
        const resp = await axios.post('http://localhost:1444/users/login', values)
        console.log("res", resp.data)
    }

    return (
        <Layout title="jNext nextjs">
            <Container maxWidth="lg">
                <Typography variant="h1">
                    Login
                </Typography>
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    error={error}
                    className={classes.textField}
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange('email')}
                    helperText={error ? "Incorrect entry." : ""}
                />
                <FormControl className={classes.textField} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        error={error}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Invia
                </Button>
            </Container>
        </Layout>
    )
}

export default LoginPage