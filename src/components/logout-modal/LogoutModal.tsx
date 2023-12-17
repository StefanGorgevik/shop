import { FC } from "react";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

interface LogoutModalProps {
  isLoggingOut: boolean;
  onClose: () => void;
}

const LogoutModal: FC<LogoutModalProps> = ({ isLoggingOut, onClose }) => {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogoutRequest = () => {
    setIsLoggedIn(false);
    onClose();
    navigate("/");
  };

  return (
    <>
      <Dialog
        open={isLoggingOut}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure you want to logout?
        </DialogTitle>

        <DialogActions>
          <Button variant="outlined" onClick={onClose}>
            No
          </Button>
          <Button variant="contained" onClick={handleLogoutRequest} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LogoutModal;
