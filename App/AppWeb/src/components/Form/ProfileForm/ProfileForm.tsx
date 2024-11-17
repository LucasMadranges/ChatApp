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

export default function ProfileForm({session}: any) {
    const [lastname, setLastname] = useState(session.user.lastname);
    const [firstname, setFirstname] = useState(session.user.firstname);
    const [description, setDescription] = useState(session.user.description);
    const [imgProfile, setImgProfile] = useState(session.user.imgProfile);

    const [changeImage, setChangeImage] = useState("");
    const [isModalShow, setIsModalShow] = useState(false);

    const [onModification, setOnModification] = useState(false);

    const refFile: any = useRef(0);
    const refCropper: any = useRef(0);

    useEffect(() => {
        if (lastname !== session.user.lastname ||
            firstname !== session.user.firstname ||
            description !== session.user.description ||
            imgProfile !== session.user.imgProfile) {
            setOnModification(true);
        } else {
            setOnModification(false);
        }
    }, [description, firstname, imgProfile, lastname,
        session.user.description, session.user.firstname, session.user.imgProfile, session.user.lastname]);

    function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const result = updateDB(session.user.id, lastname, firstname, description, imgProfile);

        console.log(result);
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

        setLastname(session.user.lastname);
        setFirstname(session.user.firstname);
        setDescription(session.user.description);
        setEmail(session.user.email);
        setImgProfile(session.user.imgProfile);
    }

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
                        <input type="text"
                               placeholder="Nom"
                               value={lastname}
                               onChange={(e) => setLastname(e.target.value)}
                               className="placeholder:text-gray-400 rounded-full bg-gray-200 px-4 py-3 w-full"/>
                        <input type="text"
                               placeholder="Prénom"
                               value={firstname}
                               onChange={(e) => setFirstname(e.target.value)}
                               className="placeholder:text-gray-400 rounded-full bg-gray-200 px-4 py-3 w-full"/>
                    </div>
                    <textarea placeholder="Description"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              className="placeholder:text-gray-400 rounded-xl bg-gray-200 px-4 py-3 w-full"
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