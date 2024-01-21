
import React from "react";
import RegisterForm from './components/form'

export default async function Register() {

  return (
    <div className="max-w-screen-md m-auto">
      <h2 className="px-3 py-6 text-2xl font-medium text-center">
        会议室预定系统 
      </h2>
      <main>
      <RegisterForm />
      </main>
    </div>
  );
}
