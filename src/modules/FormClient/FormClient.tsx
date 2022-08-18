import React, { useState } from "react";
import { Form, Formik } from "formik";
import { IForm, IProps } from "./interface";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogTitle,
  TextField,
} from "@mui/material";
import classes from "./FormClient.module.scss";
import classNames from "classnames";
import {
  buttonRemoveStyles,
  buttonSubmitStyles,
  calendarStyles,
  inputErrorStyles,
  inputLabelStyles,
  inputStyles,
  loaderStyles,
} from "./styles";
import { CLIENT_VALIDATION_SCHEMA } from "constants/validation";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { initialValues } from "./initialValues";
import { IClient } from "interfaces";
import STATUSES from "constants/statuses";
import COLORS from "constants/colors";
import { useDispatch, useSelector } from "react-redux";
import { loadingStatusSelector, removeClient } from "store/global";

const FormClient = ({ client, onSubmit, onRemove }: IProps) => {
  const loading = useSelector(loadingStatusSelector);
  const dispatch = useDispatch();
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };
  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const handleRemove = async () => {
    const id = client?._id;
    if (id && onRemove) {
      await dispatch(removeClient(id));
      setOpenConfirm(false);
      onRemove();
    }
  };

  return (
    <>
      <Formik
        initialValues={client ? client : initialValues}
        onSubmit={(values: IClient) => {
          onSubmit(values);
        }}
        validateOnBlur
        validationSchema={CLIENT_VALIDATION_SCHEMA}
        enableReinitialize
      >
        {({
          values,
          errors,
          touched,
          dirty,
          handleSubmit,
          handleChange,
          setFieldValue,
          isSubmitting,
        }: IForm) => (
          <>
            <Form
              className={classNames(classes.form, {
                [classes.loading]: loading === STATUSES.LOADING,
              })}
            >
              <>
                <TextField
                  fullWidth
                  id="legal"
                  name="legal"
                  label="Legal Name"
                  placeholder="Legal name of organization"
                  value={values.legal}
                  helperText={touched.legal && errors.legal}
                  error={Boolean(touched.legal) && Boolean(errors.legal)}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  InputProps={{
                    sx: inputStyles,
                  }}
                  InputLabelProps={{
                    sx: inputLabelStyles,
                  }}
                  FormHelperTextProps={{
                    sx: inputErrorStyles,
                  }}
                  sx={{
                    marginBottom: "1rem",
                  }}
                />
                <TextField
                  fullWidth
                  id="address"
                  name="address"
                  label="Legal Address"
                  placeholder="Legal address of organization"
                  value={values.address}
                  helperText={touched.address && errors.address}
                  error={Boolean(touched.address) && Boolean(errors.address)}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  InputProps={{
                    sx: inputStyles,
                  }}
                  InputLabelProps={{
                    sx: inputLabelStyles,
                  }}
                  FormHelperTextProps={{
                    sx: inputErrorStyles,
                  }}
                  sx={{
                    marginBottom: "1rem",
                  }}
                />
                <TextField
                  id="itn"
                  name="itn"
                  label="TAX"
                  inputMode="numeric"
                  placeholder="Organization TAX number"
                  value={values.itn}
                  helperText={touched.itn && errors.itn}
                  error={Boolean(touched.itn) && Boolean(errors.itn)}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  inputProps={{ maxLength: 9 }}
                  InputProps={{
                    sx: inputStyles,
                  }}
                  InputLabelProps={{
                    sx: inputLabelStyles,
                  }}
                  FormHelperTextProps={{
                    sx: inputErrorStyles,
                  }}
                  sx={{
                    marginBottom: "1rem",
                    width: "calc(50% - 5px)",
                  }}
                />
                <TextField
                  id="bank"
                  name="bank"
                  label="Bank Name"
                  placeholder="Organization bank name"
                  value={values.bank}
                  helperText={touched.bank && errors.bank}
                  error={Boolean(touched.bank) && Boolean(errors.bank)}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  InputProps={{
                    sx: inputStyles,
                  }}
                  InputLabelProps={{
                    sx: inputLabelStyles,
                  }}
                  FormHelperTextProps={{
                    sx: inputErrorStyles,
                  }}
                  sx={{
                    marginBottom: "1rem",
                    width: "calc(50% - 5px)",
                  }}
                />

                <TextField
                  id="iban"
                  name="iban"
                  label="IBAN"
                  placeholder="IBAN of organization"
                  value={values.iban}
                  helperText={touched.iban && errors.iban}
                  error={Boolean(touched.iban) && Boolean(errors.iban)}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  inputProps={{ maxLength: 28 }}
                  InputProps={{
                    sx: inputStyles,
                  }}
                  InputLabelProps={{
                    sx: inputLabelStyles,
                  }}
                  FormHelperTextProps={{
                    sx: inputErrorStyles,
                  }}
                  sx={{
                    marginBottom: "1rem",
                    width: "calc(50% - 5px)",
                  }}
                />
                <TextField
                  id="bic"
                  name="bic"
                  label="BIC"
                  placeholder="BIC of organization"
                  value={values.bic}
                  helperText={touched.bic && errors.bic}
                  error={Boolean(touched.bic) && Boolean(errors.bic)}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  inputProps={{ maxLength: 8 }}
                  InputProps={{
                    sx: inputStyles,
                  }}
                  InputLabelProps={{
                    sx: inputLabelStyles,
                  }}
                  FormHelperTextProps={{
                    sx: inputErrorStyles,
                  }}
                  sx={{
                    marginBottom: "1rem",
                    width: "calc(50% - 5px)",
                  }}
                />

                <TextField
                  id="noticea"
                  name="noticea"
                  label="Notice for invoice"
                  placeholder="Please leave a notice for invoice"
                  value={values.noticea}
                  helperText={touched.noticea && errors.noticea}
                  error={Boolean(touched.noticea) && Boolean(errors.noticea)}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  multiline
                  rows={2}
                  InputProps={{
                    sx: inputStyles,
                  }}
                  InputLabelProps={{
                    sx: inputLabelStyles,
                  }}
                  FormHelperTextProps={{
                    sx: inputErrorStyles,
                  }}
                  sx={{
                    marginBottom: "1rem",
                    width: "calc(50% - 5px)",
                  }}
                />

                <TextField
                  id="noticeb"
                  name="noticeb"
                  label="Notice for completion"
                  placeholder="Please leave a notice for completion"
                  value={values.noticeb}
                  helperText={touched.noticeb && errors.noticeb}
                  error={Boolean(touched.noticeb) && Boolean(errors.noticeb)}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  multiline
                  rows={2}
                  InputProps={{
                    sx: inputStyles,
                  }}
                  InputLabelProps={{
                    sx: inputLabelStyles,
                  }}
                  FormHelperTextProps={{
                    sx: inputErrorStyles,
                  }}
                  sx={{
                    marginBottom: "1rem",
                    width: "calc(50% - 5px)",
                  }}
                />

                <TextField
                  id="contract"
                  name="contract"
                  label="Contract"
                  placeholder="Contract name or number"
                  value={values.contract}
                  helperText={touched.contract && errors.contract}
                  error={Boolean(touched.contract) && Boolean(errors.contract)}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  InputProps={{
                    sx: inputStyles,
                  }}
                  InputLabelProps={{
                    sx: inputLabelStyles,
                  }}
                  FormHelperTextProps={{
                    sx: inputErrorStyles,
                  }}
                  sx={{
                    marginBottom: "1rem",
                    width: "calc(50% - 5px)",
                  }}
                />

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    label="Contract date"
                    inputFormat="dd/MM/yyyy"
                    onChange={(value) => {
                      value && setFieldValue("contractdate", value.toString());
                    }}
                    value={values.contractdate}
                    PaperProps={{
                      sx: calendarStyles,
                    }}
                    InputAdornmentProps={{
                      sx: {
                        marginLeft: "0",
                      },
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        className={classes.datepicker}
                        id="contractdate"
                        name={"contractdate"}
                        helperText={touched.contractdate && errors.contractdate}
                        error={Boolean(touched.contractdate) && Boolean(errors.contractdate)}
                        disabled={isSubmitting}
                        InputLabelProps={{
                          sx: inputLabelStyles,
                        }}
                        FormHelperTextProps={{
                          sx: inputErrorStyles,
                        }}
                        sx={{
                          marginBottom: "1rem",
                          width: "calc(50% - 5px)",
                        }}
                      />
                    )}
                  />
                </LocalizationProvider>
                <TextField
                  fullWidth
                  type={"tel"}
                  inputMode="tel"
                  id="phone"
                  name="phone"
                  label="Phone"
                  placeholder="Phone number e.g +375..."
                  value={values.phone}
                  helperText={touched.phone && errors.phone}
                  error={Boolean(touched.phone) && Boolean(errors.phone)}
                  onChange={handleChange}
                  onFocus={() => (values.phone.length < 1 ? setFieldValue("phone", "+375") : null)}
                  disabled={isSubmitting}
                  inputProps={{ maxLength: 13 }}
                  InputProps={{
                    sx: inputStyles,
                  }}
                  InputLabelProps={{
                    sx: inputLabelStyles,
                  }}
                  FormHelperTextProps={{
                    sx: inputErrorStyles,
                  }}
                  sx={{
                    marginBottom: "1rem",
                  }}
                />
              </>
              <div className={classes.controls}>
                <Button
                  className={classes.submit}
                  disabled={isSubmitting || !dirty}
                  onClick={handleSubmit}
                  sx={{ ...buttonSubmitStyles, width: client ? "90%" : "100%" }}
                >
                  Save
                </Button>
                {client && (
                  <Button
                    className={classes.remove}
                    disabled={isSubmitting}
                    onClick={handleOpenConfirm}
                    sx={buttonRemoveStyles}
                  >
                    X
                  </Button>
                )}
              </div>

              {loading === STATUSES.LOADING && (
                <Box sx={loaderStyles}>
                  <CircularProgress sx={{ color: COLORS.PRIMARY }} />
                </Box>
              )}
            </Form>
          </>
        )}
      </Formik>
      <Dialog
        open={openConfirm}
        onClose={handleCloseConfirm}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>{`Are you sure to remove ${client?.legal}`}</DialogTitle>
        <DialogActions>
          <Button
            onClick={handleCloseConfirm}
            sx={{
              color: COLORS.PRIMARY,
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleRemove}
            autoFocus
            sx={{
              color: COLORS.WHITE,
              background: COLORS.PRIMARY,
              ":hover": {
                color: COLORS.PRIMARY,
              },
            }}
          >
            Remove
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FormClient;
