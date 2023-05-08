import React, { useState } from "react";

const useHooks = () => {
  const [updatedPublisherName, setUpdatedPublisherName] = useState("");
  const [updatedUserId, setUpdatedUserId] = useState(0);
  return {
    updatedPublisherName,
    setUpdatedPublisherName,
    updatedUserId,
    setUpdatedUserId,
  };
};

export default useHooks;