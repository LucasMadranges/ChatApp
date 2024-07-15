import SubmitBtn from "@/components/Form/SubmitBtn";
import InputField from "@/components/Form/InputField";

export default function Page() {
    return (
        <form className="sm:rounded-xl bg-gray-200 p-4 h-full sm:h-fit w-full sm:w-fit sm:m-auto flex flex-col gap-8 items-center">
            <h1 className="text-4xl">S&apos;inscrire</h1>
            <div className="h-full overflow-auto flex flex-col gap-4 items-center w-full">
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="lastname"
                               className="text-lg">Nom</label>
                        <input id="lastname"
                               name="lastname"
                               type="text"
                               placeholder="Nom"
                               className="px-4 py-2 rounded-md"/>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="firstname"
                               className="text-lg">Prénom</label>
                        <input id="firstname"
                               name="firstname"
                               type="text"
                               placeholder="Prénom"
                               className="px-4 py-2 rounded-md"/>
                    </div>
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <label htmlFor="email"
                           className="text-lg">Email</label>
                    <input id="email"
                           name="email"
                           type="email"
                           placeholder="Email"
                           className="px-4 py-2 rounded-md"/>
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <label htmlFor="password"
                           className="text-lg">Mot de passe</label>
                    <input id="password"
                           name="password"
                           type="password"
                           placeholder="Mot de passe"
                           className="px-4 py-2 rounded-md"/>
                </div>
                <InputField labelText="Confirmation de mot de passe"
                            inputPlaceholder="Confirmer le mot de passe"
                            type="password"
                            name="password"/>
            </div>
            <SubmitBtn>
                S&apos;inscrire
            </SubmitBtn>
        </form>
    );
}