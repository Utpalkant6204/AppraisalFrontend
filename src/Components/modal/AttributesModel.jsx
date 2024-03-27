import React, { useState } from "react";
import Inputs from "../InputsFields/Inputs";
import { useSearchParams } from "react-router-dom";
import useAttributes from "../../Hooks/useAttributes";

const AttributesModal = ({ closeModal, attribute, id }) => {
  const [input, setInput] = useState({
    java: attribute.java || "",
    python: attribute.python || "",
    react: attribute.react || "",
    flutter: attribute.flutter || "",
    angular: attribute.anguler || "",
    uiDevelopment: attribute.uiDevelopment || "",
    apiDevelopment: attribute.apiDevelopment || "",
    deadlines: attribute.deadlines || "",
    projectManagement: attribute.projectManagement || "",
    communication: attribute.communication || "",
    behaviour: attribute.behaviour || "",
  });
  const { saveRatings } = useAttributes();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 10) {
      setInput({ ...input, [name]: parsedValue });
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    saveRatings(input, id, closeModal);
  };
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="relative bg-white rounded-lg p-8">
          <button className="absolute top-0 right-0 p-4" onClick={closeModal}>
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <h2 className="text-lg font-bold mb-4">Rate Attributes</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex-1">
              <Inputs
                name={"Behaviour"}
                value={input.behaviour}
                lname={"behaviour"}
                handleChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <Inputs
                name={"Communication"}
                value={input.communication}
                lname={"communication"}
                handleChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <Inputs
                name={"Time Management"}
                value={input.deadlines}
                lname={"deadlines"}
                handleChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <Inputs
                name={"Project Management"}
                value={input.projectManagement}
                lname={"projectManagement"}
                handleChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <Inputs
                name={"Ui Development"}
                value={input.uiDevelopment}
                lname={"uiDevelopment"}
                handleChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <Inputs
                name={"Api Development"}
                value={input.apiDevelopment}
                lname={"apiDevelopment"}
                handleChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <Inputs
                name={"Java"}
                value={input.java}
                lname={"java"}
                handleChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <Inputs
                name={"Python"}
                value={input.python}
                lname={"python"}
                handleChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <Inputs
                name={"Angular"}
                value={input.angular}
                lname={"angular"}
                handleChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <Inputs
                name={"React"}
                value={input.react}
                lname={"react"}
                handleChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <Inputs
                name={"Flutter"}
                value={input.flutter}
                lname={"flutter"}
                handleChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <button
                type="submit"
                className="bg-blue-500 text-white px-5 py-2 ms-20"
                onClick={handleClick}
              >
                Assign
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttributesModal;
