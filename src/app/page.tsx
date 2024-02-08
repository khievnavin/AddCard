'use client'
import React, { useState } from "react";
import { CardList } from "@/components/atoms";
import { Modal } from "@/components";

export default function Example() {
  
  return (
  <div className="inline-block items-center justify-center mx-auto w-full">
    {/* <Form/> */}
    <CardList></CardList>
    {/* BUTTON */}
    <Modal/>
  </div>
  )
}
