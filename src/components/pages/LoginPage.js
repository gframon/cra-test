import React from "react";
import { Paper, Grid, TextField, Button, makeStyles } from "@material-ui/core";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 10,
    margin: 10,
    textAlign: "left",
    borderRadius: 3,
  },
  h2: {
    textAlign: "center",
  },
}));

export default function LoginPage({ username, onSave }) {
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: "onSubmit",
  });

  const classes = useStyles();

  return (
    <Grid container justify="space-around">
      <form onSubmit={handleSubmit(onSave)}>
        <Paper className={classes.paper}>
          <TextField
            name="username"
            error={!!errors.username}
            label="Username"
            helperText={errors.username ? errors.username.message : ""}
            type="text"
            inputRef={register({ required: true })}
            value={username}
            fullWidth
          />
        </Paper>
        <Paper className={classes.paper}>
          <TextField
            name="password"
            error={!!errors.password}
            label="Password"
            inputRef={register({ required: true })}
            helperText={errors.password ? errors.password.message : ""}
            type="password"
            fullWidth
          />
        </Paper>

        <Button color="primary" type="submit" variant="contained" fullWidth>
          Submit
        </Button>
      </form>
    </Grid>
  );
}
