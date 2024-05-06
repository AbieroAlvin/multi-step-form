const StepIndicator = ({ currentStep, formSteps }) => {
  return (
    <div className="w-1/3 bg-blue-500 h-screen p-4">
      <ol className="list-decimal">
        {formSteps.map((step, index) => (
          <li
            key={step.id}
            className={`mb-2 ${
              index === currentStep ? "text-blue-700" : "text-gray-500"
            }`}
          >
            <span
              className={`mr-2 ${
                index === currentStep ? "text-blue-500" : "text-gray-500"
              }`}
            >
              {index + 1}.
            </span>
            {step.label}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default StepIndicator;
