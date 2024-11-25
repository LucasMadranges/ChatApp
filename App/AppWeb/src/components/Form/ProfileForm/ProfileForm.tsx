"use client";
import {FormEvent, useEffect, useRef, useState} from "react";
import Image from "next/image";
import {AddCircleIcon} from "@/components/Icons/AddCircleIcon";
import {WarningIcon} from "@/components/Icons/WarningIcon";
import {updateDB} from "@/utils/lib/updateDB";
import Modal from "@/components/Modal/Modal";
import Buttons from "@/components/Buttons/Buttons";
import "cropperjs/dist/cropper.css";
import {Cropper} from "react-cropper";
import {TrashIcon} from "@/components/Icons/TrashIcon";
import {getUserById} from "@/utils/lib/getUserById";
import Loading from "@/components/Loading/Loading";
import Input from "@/components/Form/Input/Input";
import TextArea from "@/components/Form/TextArea/TextArea";
import {useRouter} from "next/navigation";

export default function ProfileForm({session}: any) {
    const [user, setUser]: any = useState(null);

    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");
    const [description, setDescription] = useState("");
    const [imgProfile, setImgProfile] = useState("");

    const [changeImage, setChangeImage] = useState("");
    const [isModalShow, setIsModalShow] = useState(false);

    const [onModification, setOnModification] = useState(false);

    const refFile: any = useRef(0);
    const refCropper: any = useRef(0);
    const router = useRouter();

    useEffect(() => {
        async function handleGetUser() {
            const {user} = await getUserById(session.user.id);
            setUser(user);
        }

        handleGetUser();
    }, [session.user.id]);

    useEffect(() => {
        if (!user) return;

        setLastname(user.lastname);
        setFirstname(user.firstname);
        setDescription(user.description);
        setImgProfile(user.imgProfile);
    }, [user]);

    useEffect(() => {
        if (!user) return;

        if (lastname !== user.lastname ||
            firstname !== user.firstname ||
            description !== user.description ||
            imgProfile !== user.imgProfile) {
            setOnModification(true);
        } else {
            setOnModification(false);
        }
    }, [description, firstname, imgProfile, lastname, user]);

    async function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const result = await updateDB(session.user.id, lastname, firstname, description, imgProfile);

        if (result.ok) {
            console.log("Données mises à jour avec succès, rafraîchissement en cours...");
        } else {
            console.error("Erreur lors de la mise à jour des données", result);
        }
    }

    function handleChangePicture() {
        const file = refFile.current.files[0];

        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            setChangeImage(reader.result as any);
            setIsModalShow(true);
        };
        reader.readAsDataURL(file);
    }

    function handleConfirmModal(e: any) {
        setImgProfile(refCropper.current.cropper.getCroppedCanvas().toDataURL());
        handleCloseModal(e);
    }

    function handleCloseModal(e: any) {
        if (e.currentTarget.tagName === "BUTTON" || e.target === e.currentTarget) {
            refFile.current.value = "";
            setChangeImage(URL.createObjectURL(new Blob));
            setIsModalShow(false);
        }
    }

    function handleResetProfilePicture() {
        setImgProfile(session.user.imgProfile);
    }

    function handleResetAllValue(e: any) {
        e.preventDefault();

        setLastname(user.lastname);
        setFirstname(user.firstname);
        setDescription(user.description);
        setImgProfile(user.imgProfile);
    }

    if (!user) return <Loading/>;

    return (
        <>
            <form onSubmit={handleSubmitForm}
                  className="w-full flex flex-col items-center justify-start gap-12">
                <input type="file"
                       ref={refFile}
                       hidden
                       accept="image/png, image/jpeg, image/webp"
                       onInput={handleChangePicture}/>
                <div className="flex flex-col gap-4 justify-center items-center relative">
                    <div className="group relative hover:cursor-pointer"
                         onClick={() => {
                             refFile.current.click();
                         }}>
                        <div className="lg:group-hover:blur-sm transition">
                            <Image src={imgProfile}
                                   alt="Photo de profil"
                                   width={256}
                                   height={256}
                                   className="rounded-full h-24 w-24 object-cover"/>
                        </div>
                        <AddCircleIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:group-hover:block transition z-10 h-12 w-12"/>
                    </div>
                    {session.user.imgProfile !== imgProfile &&
                        <Buttons handleClick={handleResetProfilePicture}
                                 className={"absolute top-0 lg:right-0 right-4 bg-white rounded-full border border-gray-200 p-2 lg:group-hover:blur-0"}>
                            <TrashIcon className={"lg:w-4 w-6 h-auto"}/>
                        </Buttons>
                    }
                    <Buttons className={"bg-green-600 hover:bg-green-700 text-white px-4 py-2 lg:hidden"}
                             handleClick={() => refFile.current.click()}>Modifier l&apos;image</Buttons>
                </div>
                <div className="flex flex-col items-center gap-6 w-full">
                    <div className="flex flex-col md:flex-row gap-6 w-full">
                        <Input placeholder={"Nom"}
                               type={"text"}
                               value={lastname}
                               onChange={(e) => setLastname(e.target.value)}/>
                        <Input placeholder={"Prénom"}
                               type={"text"}
                               value={firstname}
                               onChange={(e) => setFirstname(e.target.value)}/>
                    </div>
                    <TextArea placeholder={"Description"}
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              rows={8}/>
                    <div className={`flex items-center justify-start gap-1 w-full ${onModification ? "" : "hidden"}`}>
                        <WarningIcon className="[&_path]:fill-amber-600"/>
                        <span className="text-sm text-amber-600">Des modifications ne sont pas enregistrées</span>
                    </div>
                    <div className="w-full flex flex-col sm:flex-row justify-end items-center gap-8">
                        <Buttons handleClick={handleResetAllValue}
                                 className={"hover:text-green-700 w-full sm:w-fit"}>Annuler</Buttons>
                        <Buttons className={"bg-green-600 hover:bg-green-700 text-white px-4 py-2 w-full sm:w-fit "}>
                            Sauvegarder
                        </Buttons>
                    </div>
                </div>
            </form>

            <Modal handleCloseModal={handleCloseModal}
                   isShow={isModalShow}
                   header={
                       <h2>Modifier l&apos;image de profil</h2>
                   }
                   headerClass={"justify-center"}
                   body={<Cropper src={changeImage}
                                  className="h-full w-full object-cover"
                                  aspectRatio={16 / 16}
                                  viewMode={1}
                                  guides={true}
                                  responsive={true}
                                  ref={refCropper}/>}
                   footer={
                       <>
                           <Buttons handleClick={handleCloseModal}
                                    className={"hover:text-green-700 px-4 py-2"}>Annuler</Buttons>
                           <Buttons handleClick={handleConfirmModal}
                                    className={"bg-green-600 hover:bg-green-700 text-white px-4 py-2"}>Enregistrer</Buttons>
                       </>
                   }
                   footerClass={"justify-end gap-4"}
            />
        </>
    );
}