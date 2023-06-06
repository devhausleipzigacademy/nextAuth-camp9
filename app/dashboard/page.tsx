"use client";
import { getSession, useSession } from "next-auth/react";
import React from "react";

function Dashboard() {
  const data = useSession();
  console.log("data", data);
  return (
    <div>
      <h1>Awesome Dashboard!!!!</h1>
    </div>
  );
}

export default Dashboard;
