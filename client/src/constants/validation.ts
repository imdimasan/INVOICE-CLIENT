import * as Yup from "yup";

export const VALIDATION_SCHEMA = Yup.object().shape({
  legal: Yup.string().required("Required"),
  itn: Yup.string()
    .required("Required")
    .min(9, "Minimum 9 symbols")
    .max(9, "Maximum 9 symbols")
    .nullable(),
  address: Yup.string().required("Required"),
  iban: Yup.string()
    .required("Required")
    .min(28, "IBAN should be 28 symbols")
    .max(28, "IBAN should be 28 symbols"),
  bank: Yup.string().required("Required"),
  bic: Yup.string()
    .required("Required")
    .min(8, "BIC should be 8 symbols")
    .max(8, "BIC should be 8 symbols"),
  noticea: Yup.string(),
  noticeb: Yup.string(),
  contract: Yup.string(),
  contractdate: Yup.date().required("Required"),
  phone: Yup.string()
    .min(13, "Minimum 13 symbols")
    .max(13, "Maximum 13 symbols")
    .required("Required"),
});