import React from "react";
import "./RegisterModal.css"; // Import the corresponding CSS file

interface RegisterModalProps {
  modalOpen: boolean;
  closeModal: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({
  modalOpen,
  closeModal,
}) => {
  if (!modalOpen) return null;

  return (
    <div
      className="modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className="modal-content">
        <span onClick={closeModal} className="close" title="Close Modal">
          &times;
        </span>
        <form>
          <div className="containerSign">
            <h1>REGISTER</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />
            <label htmlFor="lstName">
              <b>Last Name</b>
            </label>
            <input
              className="phBox"
              type="text"
              placeholder="Enter your Last Name"
              name="lstName"
              required
            />
            <label htmlFor="stName">
              <b>First Name</b>
            </label>
            <input
              className="phBox"
              type="text"
              placeholder="Enter your First Name"
              name="stName"
              required
            />
            <label htmlFor="studentNo">
              <b>Student Number</b>
            </label>
            <input
              className="phBox"
              type="text"
              placeholder="Enter your Student Number"
              name="studentNo"
              required
            />
            <label htmlFor="yrLvl">
              <b>Enter your Year Level</b>
            </label>
            <select
              className="yrLvld"
              id="yrLvld"
              name="yrLvld"
              required
              style={{ height: "50px", width: "100%", fontSize: "40px" }}
            >
              <option className="optionO" disabled selected hidden>
                Choose your year level
              </option>
              <option value="1st">1st Year</option>
              <option value="2nd">2nd Year</option>
              <option value="3rd">3rd Year</option>
              <option value="4th">4th Year</option>
              <option value="5th">5th Year</option>
            </select>
            <br />
            <label htmlFor="psw">
              <b>PinKey</b>
            </label>
            <input
              className="phBox"
              type="password"
              placeholder="Enter 6 digit Pinkey"
              name="psw"
              pattern="\d{6}"
              required
            />
            <label htmlFor="psw-repeat">
              <b>Repeat PinKey</b>
            </label>
            <input
              className="phBox"
              type="password"
              placeholder="Repeat 6 digit Pinkey"
              name="psw-repeat"
              pattern="\d{6}"
              required
            />
            <p>
              By creating an account you agree to our{" "}
              <a href="#" style={{ color: "dodgerblue" }}>
                Terms & Privacy
              </a>
              .
            </p>
            <div className="clearfix">
              <button type="button" onClick={closeModal} className="cancelbtn">
                Cancel
              </button>
              <button type="submit" className="signupbtn">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
