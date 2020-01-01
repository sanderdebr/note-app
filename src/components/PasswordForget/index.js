import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const ForgotPassword = ({ handleClose, open, email, isInvalidEmail, onChange, onPassReset, error }) => {

  return (
  <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
    <DialogTitle id="simple-dialog-title">Forgot password</DialogTitle>
    <Grid container>
      <Grid style={{padding: '20px'}} item xs>
        <form onSubmit={onPassReset}>
            <TextField
                variant="outlined"
                required
                fullWidth
                name="email"
                label="Email"
                type="email"
                value={email}
                onChange={onChange}
                id="email"
              />
            <Button
              style={{marginTop: '20px'}}
              disabled={isInvalidEmail}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >Reset My Password</Button>
            {error && <p style={{color: 'red', marginTop: '20px', marginBottom: '0px'}}>{error.message}</p>}
          </form>
      </Grid>
    </Grid>
  </Dialog>
)};

export default ForgotPassword;