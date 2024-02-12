"use client";
import React, { useState } from "react";
import { CardList } from "@/components/atoms";
import { Modal } from "@/components";
import { Card } from "@/components/atoms";
import { FormAdd } from "@/components/atoms";

export interface User {
  username: string;
  profile: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([
    { username: "John", profile: "/Picasso.jpg" },
    { username: "Leap", profile: "/Picasso.jpg" },
  ]);

  const [selectCard, setSelectCard] = useState("")
  const selectedUser = users.filter((user) => {
    if(user.username === selectCard){
      return user
    }
  })
  return (
    <div className="inline-block items-center justify-center mx-auto w-full">
      <CardList items={users} selectCard={selectCard} onSelectCard={setSelectCard}/>
      <Modal selectCard={selectCard}>
        <FormAdd addNewUser={setUsers} getValue={selectedUser.length > 0 ? selectedUser[0] : {username: "" , profile:""}}/>
      </Modal>
    </div>
  );
}
