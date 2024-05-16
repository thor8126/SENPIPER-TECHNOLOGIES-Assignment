import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import TextInput from "./Helpers/TextInput";
import RadioInput from "./Helpers/RadioInput";
import SuccessPage from "./Helpers/SuccessPage";

const countryCodes = [
  {
    code: "+91",
    name: "India",
    regex: /^\d{10}$/,
    // sample phone: "9876543210"
  },
  {
    code: "+1",
    name: "USA",
    regex: /^\(\d{3}\)\s*\d{3}-\d{4}(?:\s*\d{1,10})?$/,
    // sample phone: "(123) 456-7890",
  },
];

function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [serviceRating, setServiceRating] = useState("");
  const [beverageRating, setBeverageRating] = useState("");
  const [cleanliness, setCleanliness] = useState("");
  const [overallRating, setOverallRating] = useState("");
  const [showSuccessPage, setShowSuccessPage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !phone ||
      !serviceRating ||
      !beverageRating ||
      !cleanliness ||
      !overallRating
    ) {
      alert("Please fill in all fields");
      return;
    }
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
    if (!isValidPhone(phone)) {
      alert("Please enter a valid phone number");
      return;
    }
    const submission = {
      name,
      email,
      phone: `${countryCode}${phone}`,
      serviceRating,
      beverageRating,
      cleanliness,
      overallRating,
    };
    const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
    submissions.push(submission);
    localStorage.setItem("submissions", JSON.stringify(submissions));
    setShowSuccessPage(true);
    clearForm();
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone) => {
    const selectedCountry = countryCodes.find(
      (code) => code.code === countryCode
    );
    const phoneRegex = selectedCountry ? selectedCountry.regex : /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCountryCode("+1");
    setServiceRating("");
    setBeverageRating("");
    setCleanliness("");
    setOverallRating("");
  };

  const handleCloseSuccessPage = () => {
    setShowSuccessPage(false);
  };

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    const selectedCountry = countryCodes.find(
      (code) => code.code === countryCode
    );
    let formattedPhone = value;

    formattedPhone = formattedPhone.replace(/\D/g, "");

    if (selectedCountry && selectedCountry.code === "+1") {
      formattedPhone = formattedPhone.replace(
        /(\d{0,3})(\d{0,3})(\d{0,4})/,
        "($1) $2-$3"
      );
    } else if (selectedCountry && selectedCountry.code === "+91") {
      formattedPhone = formattedPhone.replace(/(\d{0,10})/, "$1");
    }

    const maxPhoneLength = selectedCountry
      ? selectedCountry.regex.toString().length
      : 15;
    const maxLengthForUSASample = 14;
    const maxLengthForIndiaSample = 10;

    if (
      selectedCountry &&
      selectedCountry.name === "USA" &&
      formattedPhone.length > maxLengthForUSASample
    ) {
      formattedPhone = formattedPhone.substring(0, maxLengthForUSASample);
    } else if (
      selectedCountry &&
      selectedCountry.name === "India" &&
      formattedPhone.length > maxLengthForIndiaSample
    ) {
      formattedPhone = formattedPhone.substring(0, maxLengthForIndiaSample);
    }

    setPhone(formattedPhone);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pb-8 mb-4 form-ff"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Aromatic Bar</h2>
        <p className="mb-4">
          We are committed to providing you with the best dining experience
          possible, so we welcome your comments. Please fill out this
          questionnaire. Thank you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="w-full mt-5">
            <TextInput
              label="Customer Name"
              id="name"
              value={name}
              onChange={setName}
            />
            <TextInput
              label="Email"
              id="email"
              type="email"
              value={email}
              onChange={setEmail}
            />
            <div className="flex items-center gap-1 mt-8">
              <FormControl sx={{ minWidth: 140 }} className="mr-2">
                <InputLabel id="country-code-label">Code</InputLabel>
                <Select
                  labelId="country-code-label"
                  id="countryCode"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  label="Code"
                >
                  {countryCodes.map((code) => (
                    <MenuItem key={code.code} value={code.code}>
                      {code.name} ({code.code})
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                className="mr-2 w-full"
                label="Phone"
                id="phone"
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                variant="outlined"
              />
            </div>
            <div className="mt-7 w-full flex justify-center">
              <Button
                type="submit"
                variant="contained"
                color="success"
                sx={{
                  px: 5,
                  py: 2,
                  display: { xs: "none", md: "block" },
                }}
              >
                Submit Review
              </Button>
            </div>
          </div>
          <div className="w-full ml-5">
            <RadioInput
              label="Please rate the quality of the service you received from your host:"
              name="serviceRating"
              options={["Excellent", "Good", "Fair", "Bad"]}
              value={serviceRating}
              onChange={setServiceRating}
            />
            <RadioInput
              label="Please rate the quality of your beverage:"
              name="beverageRating"
              options={["Excellent", "Good", "Fair", "Bad"]}
              value={beverageRating}
              onChange={setBeverageRating}
            />
            <RadioInput
              label="Was our restaurant clean?"
              name="cleanliness"
              options={["Excellent", "Good", "Fair", "Bad"]}
              value={cleanliness}
              onChange={setCleanliness}
            />
            <RadioInput
              label="Please rate your overall dining experience:"
              name="overallRating"
              options={["Excellent", "Good", "Fair", "Bad"]}
              value={overallRating}
              onChange={setOverallRating}
            />
          </div>
        </div>
        <div className="mt-4 w-full flex justify-center">
          <Button
            type="submit"
            variant="contained"
            color="success"
            sx={{
              px: 5,
              py: 2,
              display: { xs: "blcok", md: "none" },
            }}
          >
            Submit Review
          </Button>
        </div>
      </form>
      {showSuccessPage && <SuccessPage onClose={handleCloseSuccessPage} />}
    </>
  );
}

export default FeedbackForm;
