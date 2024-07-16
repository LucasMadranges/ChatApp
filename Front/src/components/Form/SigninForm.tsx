"use client";
import InputField from "@/components/Form/InputField";
import SubmitBtn from "@/components/Form/SubmitBtn";
import Link from "next/link";
import {useState} from "react";
import {signIn} from "next-auth/react";
import {useSearchParams} from "next/navigation";

export default function SigninForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const error = useSearchParams().get("error");

    async function submitFormSignin(event: any) {
        event.preventDefault();
        await signIn("credentials", {
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            redirect: true,
            callbackUrl: `${process.env.NEXTAUTH_URL}/chats`,
        });
    }

    return (
        <form onSubmit={submitFormSignin}
              className="overflow-auto sm:rounded-xl bg-gray-200 p-4 h-full sm:h-fit w-full sm:w-[500px] sm:m-auto flex flex-col gap-8 items-center justify-center">
            <h1 className="text-4xl">Se connecter</h1>
            <div className="flex flex-col gap-4 items-center w-full">
                <div className="flex flex-col gap-1 w-full">
                    <InputField labelText="Email"
                                inputPlaceholder="Email"
                                type="email"
                                name="email"
                                onChange={(e: any) => setEmail(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <InputField labelText="Mot de passe"
                                inputPlaceholder="Mot de passe"
                                type="password"
                                name="password"
                                onChange={(e: any) => setPassword(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <InputField labelText="Confirmation de mot de passe"
                                inputPlaceholder="Confirmer le mot de passe"
                                type="password"
                                name="confirm-password"
                                onChange={(e: any) => setConfirmPassword(e.target.value)}/>
                </div>
            </div>
            {error === "SessionRequired" && <div className="text-red-600 p-2 bg-red-100 rounded-md">
                La connexion est requise pour accéder à cette page
            </div>}
            <SubmitBtn>
                Se connecter
            </SubmitBtn>
            <div className="mt-2 flex items-center gap-2">
                <span>Pas encore de compte ?</span>
                <Link href="/auth/signup"
                      className="underline underline-offset-2">S&apos;inscrire</Link>
            </div>
        </form>
    );
}