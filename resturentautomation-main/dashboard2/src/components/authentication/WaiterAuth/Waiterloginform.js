import * as Yup from "yup";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useFormik, Form, FormikProvider } from "formik";
import { Icon } from "@iconify/react";
import eyeFill from "@iconify/icons-eva/eye-fill";
import closeFill from "@iconify/icons-eva/close-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
// material
import {
  Link,
  Stack,
  Alert,
  Checkbox,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  FormControlLabel,
} from "@material-ui/core";
import { LoadingButton } from "@material-ui/lab";
// routes
import { PATH_AUTH } from "../../../routes/paths";
import { PATH_DASHBOARD } from "../../../routes/paths";
// hooks
import useAuth from "../../../hooks/useAuth";
//import useIsMountedRef from "../../../hooks/useIsMountedRef";
//
import { MIconButton } from "../../@material-extend";
// ----------------------------------------------------------------------

export default function LoginFormWaiters() {
  const router = useNavigate();/*
  //const { login } = useAuth();
  //const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      try {
        //await Submitfunction(values);
        enqueueSnackbar("Login success", { 
          variant: "success",
          action: (key) => (
            <MIconButton size="small" onClick={() => closeSnackbar(key)}>
              <Icon icon={closeFill} />
            </MIconButton>
          ),
        });
        /*if (isMountedRef.current) {
          setSubmitting(false);
        }
      } catch (error) {
        console.error(error);
        //resetForm();
        /*if (isMountedRef.current) {
          setSubmitting(false);
          setErrors({ afterSubmit: error.message });
        }
      }
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
*/
  return (
      <>
        <Stack spacing={3}>


          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton /*onClick={handleShowPassword}*/ edge="end">
                    <Icon /*icon={showPassword ? eyeFill : eyeOffFill}*/ />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          <FormControlLabel
            control={
              <Checkbox
                //{...getFieldProps("remember")}
                //checked={values.remember}
              />
            }
            label="Remember me"
          />

          <Link
            component={RouterLink}
            variant="subtitle2"
            to={PATH_AUTH.resetPassword}
          >
            Forgot password?
          </Link>
        </Stack>

        <Button
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          href="/waiter/orders"
          
          //loading={isSubmitting}
        >
          Login
        </Button>
        </>
  );
}
