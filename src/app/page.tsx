import { login } from "@/lib/authSession";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Home() {
  return (
    <main className="bg-gray-950 text-white flex min-h-screen flex-col items-center justify-between p-24">
      <form
        action={async (formData) => {
          "use server";
          try {
            await login(formData);
            redirect("/admin");
          } catch (error) {
            console.log("Credenciais inválidas. Por favor, tente novamente.");
          }
        }}
        className="p-6 rounded-md bg-gray-800 space-y-4 max-w-[20rem] w-full"
      >
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-300">Usuário</label>
          <input
            type="text"
            name="user"
            id="user"
            className="bg-gray-900 h-10 rounded-md px-2 text-xs"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-300">Senha</label>
          <input
            type="text"
            name="pass"
            id="pass"
            className="bg-gray-900 h-10 rounded-md px-2 text-xs"
          />
        </div>

        <button
          type="submit"
          className="bg-green-700 hover:bg-green-600 py-2 px-8 rounded-md text-sm float-right transition-all"
        >
          Logar
        </button>
      </form>
    </main>
  );
}
