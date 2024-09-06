"use client";
import InputField from "@/components/Form/InputField";
import SubmitBtn from "@/components/Form/SubmitBtn";
import Link from "next/link";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {registerDB} from "@/utils/lib/registerDB";

export default function SignupForm() {
    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const router = useRouter();

    async function handleFormSignup(event: any) {
        event.preventDefault();
        const result: any = await registerDB(lastname, firstname, email, password, confirmPassword);

        if (result.message) {
            setErrorMsg(result.message);
        } else {
            router.push("/auth/signin");
        }
    }

    return (
        <form onSubmit={handleFormSignup}
              className="overflow-auto sm:rounded-xl bg-gray-200 p-4 sm:w-[500px] w-full sm:m-auto flex flex-col gap-8 items-center">
            <h1 className="text-4xl">S&apos;inscrire</h1>
            <div className="flex flex-col gap-4 items-center w-full">
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                    <div className="flex flex-col gap-1 w-full">
                        <InputField labelText="Nom"
                                    inputPlaceholder="Nom"
                                    type="text"
                                    name="lastname"
                                    onChange={(e: any) => setLastname(e.target.value)}/>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <InputField labelText="Prénom"
                                    inputPlaceholder="Prénom"
                                    type="text"
                                    name="firstname"
                                    onChange={(e: any) => setFirstname(e.target.value)}/>
                    </div>
                </div>
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
                <InputField labelText="Confirmation de mot de passe"
                            inputPlaceholder="Confirmer le mot de passe"
                            type="password"
                            name="confirm-password"
                            onChange={(e: any) => setConfirmPassword(e.target.value)}/>
            </div>
            {errorMsg !== "" &&
                <div className="text-red-600 p-2 bg-red-100 rounded-md">
                    {errorMsg}
                </div>
            }
            <SubmitBtn>
                S&apos;inscrire
            </SubmitBtn>
            <div className="mt-2 flex items-center gap-2">
                <span>Déjà un compte ?</span>
                <Link href="/auth/signin"
                      className="underline underline-offset-2">Se connecter</Link>
            </div>
        </form>
    );
}