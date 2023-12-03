import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createInterest } from "./actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewInterestForm = ({ interests = [], onCreatePressed }) => {
  const [interest, setInterest] = useState("");
  const [isTyping, setIsTyping] = useState(false); // State variable to track typing
  const [isInterestFilled, setIsInterestFilled] = useState(false);

  const handleInputChange = () => {
    setIsTyping(true); // Set the state to true when the user starts typing
  };

  const handleBlur = () => {
    setIsTyping(false); // Reset the state when the user clicks outside the input field
  };

  useEffect(() => {
    if (interest) {
      setIsInterestFilled(true);
    } else {
      setIsInterestFilled(false);
    }
  }, [interest]);
  return (
    <div
      className={`border rounded ${
        isInterestFilled
          ? "border-green-500"
          : isTyping
          ? "border-yellow-500"
          : ""
      } p-3 m-2`}
    >
      <input
        className="dark:bg-zinc-800 form-control form-control-sm mb-2 w-96 border outline-gray-200 p-1"
        type="text"
        placeholder="Enter Some of your interests"
        value={interest}
        onChange={(e) => {
          setInterest(e.target.value);
          handleInputChange();
        }}
        onBlur={handleBlur}
      />
      <div className="text-right">
        <button
          className="btn btn-success btn-sm rounded-circle rounded-full w-7 h-7 bg-green-400 text-white"
          disabled={interest === ""}
          onClick={() => {
            onCreatePressed({ interest });
            setInterest("");
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  interests: state.interests,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (interest) => dispatch(createInterest(interest)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewInterestForm);
