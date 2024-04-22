import { getSession, logout } from "@/lib/authSession";
import { redirect } from "next/navigation";
import React from "react";

const Admin = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/");
  }

  return (
    <main className="bg-gray-950 text-white min-h-screen flex-col items-center justify-between p-16">
      <div className="container mx-auto px-4">
        <form
          action={async () => {
            "use server";
            await logout();
            redirect("/");
          }}
        >
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-600 py-2 px-8 rounded-md text-sm float-right transition-all"
          >
            Sair
          </button>
        </form>
        <h1>Admin page</h1>
      </div>
    </main>
  );
};

export default Admin;
