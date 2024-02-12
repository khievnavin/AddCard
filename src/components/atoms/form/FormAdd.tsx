import { User } from "@/app/page";
import React, { useState } from "react";

interface FormAddProps {
  addNewUser: (user: User) => void;
}

const FormAdd = ({ addNewUser, getValue }: FormAddProps) => {
  console.log(getValue);
  const [user, setUser] = useState({
    username: "",
    profile: "",
  });

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewUser((prevUsers) => [...prevUsers, user]);
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
        value={getValue.username}
        onChange={handleOnChange}
      />
      <br />

      <label htmlFor="image">Image:</label>
      {getValue.profile ? (
        <div className="relative">
          <img
            className="absolute w-[100px] h-[100px]"
            src={getValue.profile}
            alt="User's Photo"
          />
          <button className="absolute bg-red-500" onClick={() => {
            getValue.profile = "";
          }}>
            &times;
          </button>
        </div>
      ) : (
        <input
          className="border rounded-md border-black m-2"
          type="file"
          accept="image/*"
          name="profile"
          onChange={handleOnUploadFile}
        />
      )}
      <br />
      <button>Submit</button>
    </form>
  );
};

export { FormAdd };
