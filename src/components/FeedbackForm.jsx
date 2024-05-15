import React, { useState } from "react";
import TextInput from "./Helpers/TextInput";
import RadioInput from "./Helpers/RadioInput";
import SuccessPage from "./Helpers/SuccessPage";

function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
      phone,
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
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setServiceRating("");
    setBeverageRating("");
    setCleanliness("");
    setOverallRating("");
  };

  const handleCloseSuccessPage = () => {
    setShowSuccessPage(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 form-ff"
      >
        <h2 className="text-2xl font-bold mb-4">Aromatic Bar</h2>
        <p className="mb-4">
          We are committed to providing you with the best dining experience
          possible, so we welcome your comments. Please fill out this
          questionnaire. Thank you.
        </p>
        <div className="grid grid-cols-2 gap-10">
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
            <TextInput
              label="Phone"
              id="phone"
              type="tel"
              value={phone}
              onChange={setPhone}
            />
          </div>
          <div className="w-full">
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
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-20 py-5 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
      {showSuccessPage && <SuccessPage onClose={handleCloseSuccessPage} />}
    </>
  );
}

export default FeedbackForm;
