"use client";
import React, { useReducer, useState } from "react";
import emailjs from "@emailjs/browser";

const initialState = {
  name: { value: "", error: "" },
  email: { value: "", error: "" },
  message: { value: "", error: "" },
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: { value: action.value, error: "" } };
    case "SET_ERROR":
      return {
        ...state,
        [action.field]: { ...state[action.field], error: action.error },
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export const Contact = () => {
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = (newFormData) => {
    return (
      newFormData.name.value.trim() !== "" &&
      newFormData.email.value.includes("@") &&
      newFormData.message.value.trim().length >= 10
    );
  };

  const handleChange = (field, value) => {
    const updatedFormData = { ...formData, [field]: { value, error: "" } };
    dispatch({ type: "UPDATE_FIELD", field, value });
    setIsFormValid(validateForm(updatedFormData));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setLoading(true);

    const templateParams = {
      from_name: formData.name.value,
      from_email: formData.email.value,
      message: formData.message.value,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          //   console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Your message has been sent successfully!");
          dispatch({ type: "RESET" });
          setIsFormValid(false);
        },
        (error) => {
          //   console.error("FAILED...", error);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="w-full">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
            value={formData.name.value}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          {formData.name.error && (
            <p className="text-red-500 text-xs mt-1">{formData.name.error}</p>
          )}
        </div>
        <div className="w-full">
          <input
            type="email"
            placeholder="Your email address"
            className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
            value={formData.email.value}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          {formData.email.error && (
            <p className="text-red-500 text-xs mt-1">{formData.email.error}</p>
          )}
        </div>
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          rows={5}
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.message.value}
          onChange={(e) => handleChange("message", e.target.value)}
        />
        {formData.message.error && (
          <p className="text-red-500 text-xs mt-1">{formData.message.error}</p>
        )}
      </div>
      <button
        className={`w-full px-2 py-2 mt-4 rounded-md font-bold ${
          isFormValid
            ? "bg-blue-600 text-white"
            : "bg-neutral-100 text-neutral-500"
        } transition duration-200`}
        type="submit"
        disabled={loading || !isFormValid}
      >
        {loading ? "Sending..." : "Submit"}
      </button>
      {successMessage && (
        <p className="text-green-500 text-sm mt-2">{successMessage}</p>
      )}
    </form>
  );
};
