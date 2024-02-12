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

  return (
    <div className="inline-block items-center justify-center mx-auto w-full">
      <CardList items={users} />
      <Modal>
        <FormAdd addNewUser={setUsers} />
      </Modal>
    </div>
  );
}
