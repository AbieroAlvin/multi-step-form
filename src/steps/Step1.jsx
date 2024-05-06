import FormValidation from "../components/FormValidation";
import { useState } from "react";
import { toast } from "react-toastify";

const Step1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // validate name
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    //  validate email
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    // validate phonenumber
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.number)) {
      newErrors.name = "Valid phone number is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      toast.success("Logged in successfully");
      setFormData({
        name: "",
        email: "",
        number: "",
      });
      console.log("Form Submitted successfully!", formData);
    } else {
      console.log("Form submission failed. Please check the errors");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <div>
      <FormValidation
        errors={errors}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
};

export default Step1;
