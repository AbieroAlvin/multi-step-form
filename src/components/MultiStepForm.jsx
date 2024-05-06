import { useState } from "react";
import { toast } from "react-toastify";
import Step1 from "../steps/Step1";
import Step2 from "../steps/Step2";
import Step3 from "../steps/Step3";
import StepIndicator from "./StepIndicator";
import StepNavigation from "./StepNavigation";

const formSteps = [
  { id: "1", label: "Step 1", title: "Your Info" },
  { id: "2", label: "Step 2", title: "Select Plan" },
  { id: "3", label: "Step 3", title: "Add-Ons" },
  { id: "4", label: "Step 3", title: "Summary" },
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    step1: "",
    step2: "",
    step3: "",
    step4: "",
  });

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    toast.success("Form submitted successfully!");
  };

  return (
    <div className="flex">
      <StepIndicator currentStep={currentStep} formSteps={formSteps} />
      <div className="container mx-auto py-8 w-2/3">
        <form onSubmit={handleSubmit}>
          {" "}
          {currentStep === 0 && (
            <Step1 formData={formData} handleInputChange={handleInputChange} />
          )}
          {currentStep === 1 && (
            <Step2 formData={formData} handleInputChange={handleInputChange} />
          )}
          {currentStep === 2 && (
            <Step3 formData={formData} handleInputChange={handleInputChange} />
          )}
          <StepNavigation
            currentStep={currentStep}
            formSteps={formSteps}
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
            handleSubmit={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;
