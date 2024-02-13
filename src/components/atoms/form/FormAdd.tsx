import { User } from "@/app/page";
import React, { useState } from "react";

interface FormAddProps {
  addNewUser: (user: User) => void;
}

const FormAdd = ({ addNewUser }: FormAddProps) => {
  const [user, setUser] = useState({
    id: "",
    username: "",
    profile: "",
  });

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newId = Math.random().toString(36).substring(2, 8); // return 1f74e
    const newUser = { ...user, id: newId };
    addNewUser((prevUsers) => {
      return [...prevUsers, newUser];
    });
  };

  // Get the value from the input fields:
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Event", e);
    setUser((prevUser) => {
      return {
        ...prevUser,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleOnUploadFile = (e: React.FormEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser((prevUser) => {
        return {
          ...prevUser,
          profile: imageUrl,
        };
      });
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        className="text-black border rounded-md border-black m-2 focus:ring-2 outline-none px-2"
        type="text"
        id="name"
        name="username"
        value={user.username}
        onChange={handleOnChange}
      />
      <br />

      <label htmlFor="image">Image:</label>
      <input
        className="border rounded-md border-black m-2"
        type="file"
        accept="image/*"
        name="profile"
        onChange={handleOnUploadFile}
      />
      <br />
      <button>Submit</button>
    </form>
  );
};

export { FormAdd };
