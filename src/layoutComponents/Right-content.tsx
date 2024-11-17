import React, { useState, useEffect } from "react";
import RegisterModal from "./rgthContentBtnModal/RegisterModal";
import SignInModal from "./rgthContentBtnModal/SignInModal";
import SignOutModal from "./rgthContentBtnModal/SignOutModal";
import "./RightContent.css"; // Import the corresponding CSS file

const RightContent: React.FC = () => {
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [signOutModalOpen, setSignOutModalOpen] = useState(false);

  const openRegisterModal = () => setRegisterModalOpen(true);
  const closeRegisterModal = () => setRegisterModalOpen(false);

  const openSignInModal = () => setSignInModalOpen(true);
  const closeSignInModal = () => setSignInModalOpen(false);

  const openSignOutModal = () => setSignOutModalOpen(true);
  const closeSignOutModal = () => setSignOutModalOpen(false);

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains("modal")) {
      setRegisterModalOpen(false);
      setSignInModalOpen(false);
      setSignOutModalOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="right-content-container">
      <p>Right Content</p>
      <button className="rgBtn" onClick={openRegisterModal}>
        REGISTER
      </button>
      <button className="lgBtn" onClick={openSignInModal}>
        SIGN IN
      </button>
      <button className="otBtn" onClick={openSignOutModal}>
        SIGN OUT
      </button>

      <RegisterModal
        modalOpen={registerModalOpen}
        closeModal={closeRegisterModal}
      />
      <SignInModal modalOpen={signInModalOpen} closeModal={closeSignInModal} />
      <SignOutModal
        modalOpen={signOutModalOpen}
        closeModal={closeSignOutModal}
      />
    </div>
  );
};

export default RightContent;
