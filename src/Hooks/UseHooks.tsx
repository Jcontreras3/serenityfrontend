import React from "react";
import { useState } from "react";

export default function UseHooks() {
  const[updatedPublisherName, setUpdatedPublisherName] = useState("");
  const[updatedUserId, setUpdatedUserId] = useState(0);
  return { updatedPublisherName, setUpdatedPublisherName, updatedUserId, setUpdatedUserId };
}
