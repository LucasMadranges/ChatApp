import InputField from "@/components/Form/InputField";
import SubmitBtn from "@/components/Form/SubmitBtn";
import Link from "next/link";

export default function SignupForm() {
    return (
        <form className="overflow-auto sm:rounded-xl bg-gray-200 p-4 h-full sm:h-fit w-full sm:w-fit sm:m-auto flex flex-col gap-8 items-center">
            <h1 className="text-4xl">S&apos;inscrire</h1>
            <div className="flex flex-col gap-4 items-center w-full">
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                    <div className="flex flex-col gap-1 w-full">
                        <InputField labelText="Nom"
                                    inputPlaceholder="Nom"
                                    type="text"
                                    name="lastname"/>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <InputField labelText="Prénom"
                                    inputPlaceholder="Prénom"
                                    type="text"
                                    name="firstname"/>
                    </div>
                </div>
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
                            name="confirm-password"/>
            </div>
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