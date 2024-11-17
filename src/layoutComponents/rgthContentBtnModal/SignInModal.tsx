import React from "react";
import "./SignInModal.css"; // Import the corresponding CSS file

interface SignInModalProps {
  modalOpen: boolean;
  closeModal: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ modalOpen, closeModal }) => {
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
            <h1>Sign In</h1>
            <p>Please fill for attendance.</p>
            <hr />
            <label htmlFor="email">
              <b>Student Number</b>
            </label>
            <input
              className="phBox"
              type="text"
              placeholder="Enter your Student Number"
              name="email"
              required
            />
            <label htmlFor="psw">
              <b>Pass key</b>
            </label>
            <input
              className="phBox"
              type="password"
              placeholder="Enter Pass Key"
              name="psw"
              required
            />
            <p>
              <a href="#" style={{ color: "dodgerblue" }}>
                Forgot PinKey
              </a>
              .
            </p>
            <div className="clearfix">
              <button type="button" onClick={closeModal} className="cancelbtn">
                Cancel
              </button>
              <button type="submit" className="signupbtn">
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;
