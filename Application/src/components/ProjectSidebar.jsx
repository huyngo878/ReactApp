import React, { useState } from "react";
import Button from "./Button.jsx";
import Login from "./Login.jsx";

// A simple Modal component implementation.
function Modal({ onClose, children }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg">
        {children}
        <button
          onClick={onClose}
          className="mt-4 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default function ProjectSidebar({ onStartAddTask }) {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseModal = () => {
    setShowLogin(false);
  };

  const handleLoginSuccess = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail(""); // Clear the user email
    // Here, you would also clear any other user-specific state or data
  };

  return (
    <>
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
          {isLoggedIn ? userEmail : "Task Reminder"}
        </h2>
        <div className="font-bold self-stretch text-center">
          {isLoggedIn ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <Button onClick={handleLoginClick}>Login</Button>
          )}
        </div>
        <ul className="mt-12">
          {isLoggedIn ? (
            <>
              {/* Menu items to show when user is logged in */}
              <li className="mb-6">
                <Button className="w-full font-bold">View Profile</Button>
              </li>
              <li className="mb-6">
                <Button className="w-full font-bold">Account Settings</Button>
              </li>
              <li className="mb-6">
                <Button className="w-full font-bold" onClick={onStartAddTask}>
                  View Task
                </Button>
              </li>
              <li className="mb-6">
                <Button className="w-full font-bold" onClick={onStartAddTask}>
                  Add Task
                </Button>
              </li>
            </>
          ) : (
            <>
              {/* Default menu items */}
              <li className="mb-6">
                <Button className="w-full font-bold" onClick={onStartAddTask}>
                  View Task
                </Button>
              </li>
              <li className="mb-6">
                <Button className="w-full font-bold" onClick={onStartAddTask}>
                  Add Task
                </Button>
              </li>
            </>
          )}
        </ul>
      </aside>

      {/* Modal for Login */}
      {showLogin && (
        <Modal onClose={handleCloseModal}>
          <Login onLoginSuccess={handleLoginSuccess} />
        </Modal>
      )}
    </>
  );
}
