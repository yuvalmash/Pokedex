import { Alert, Snackbar } from "@mui/material";

export default function Toast({ isToastOpen, setIsToastOpen, toastObj }) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      open={isToastOpen}
      autoHideDuration={2000}
      onClose={() => setIsToastOpen(false)}
    >
      <Alert
        onClose={() => setIsToastOpen(false)}
        severity={toastObj.status || undefined}
      >
        {toastObj.msg}
      </Alert>
    </Snackbar>
  );
}
