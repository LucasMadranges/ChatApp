import InputField from "@/components/Form/InputField";
import SubmitBtn from "@/components/Form/SubmitBtn";
import Link from "next/link";

export default function LoginForm() {
    return (
        <form className="overflow-auto sm:rounded-xl bg-gray-200 p-4 h-full sm:h-fit w-full sm:w-fit sm:m-auto flex flex-col gap-8 items-center justify-center">
            <h1 className="text-4xl">Se connecter</h1>
            <div className="flex flex-col gap-4 items-center w-full">
                <div className="flex flex-col gap-1 w-full">
                    <InputField labelText="Email"
                                inputPlaceholder="Email"
                                type="email"
                                name="email"/>
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <InputField labelText="Mot de passe"
                                inputPlaceholder="Mot de passe"
                                type="password"
                                name="password"/>
                </div>
                <InputField labelText="Confirmation de mot de passe"
                            inputPlaceholder="Confirmer le mot de passe"
                            type="password"
                            name="password"/>
            </div>
            <SubmitBtn>
                Se connecter
            </SubmitBtn>
            <div className="mt-2 flex items-center gap-2">
                <span>Pas encore de compte ?</span>
                <Link href="/auth/signin"
                      className="underline underline-offset-2">S&apos;inscrire</Link>
            </div>
        </form>
    );
}