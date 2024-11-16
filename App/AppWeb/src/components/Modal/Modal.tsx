import React, {MouseEventHandler} from "react";
import {CloseIcon} from "@/components/Icons/CloseIcon";
import Buttons from "@/components/Buttons/Buttons";

export default function Modal({
                                  header,
                                  headerClass,
                                  body,
                                  bodyClass,
                                  footer,
                                  footerClass,
                                  handleCloseModal,
                                  isShow,
                              }: Readonly<{
    header?: React.ReactNode,
    headerClass?: string,
    body?: React.ReactNode,
    bodyClass?: string,
    footer?: React.ReactNode,
    footerClass?: string,
    handleCloseModal: MouseEventHandler,
    isShow: boolean,
}>) {
    return (
        isShow && <div className="absolute top-0 left-0 w-svw h-svh bg-black bg-opacity-50"
                       onClick={handleCloseModal}>
            <div className="rounded-2xl bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col min-w-fit w-1/2 min-h-fit h-1/2">
                <div className={`relative border-b border-gray-200 py-4 px-8 flex items-center ${headerClass}`}>
                    {header || <h2>Default header!</h2>}
                    <Buttons handleClick={handleCloseModal}
                             className="absolute top-1/2 -translate-y-1/2 right-4">
                        <CloseIcon/>
                    </Buttons>
                </div>
                <div className={`flex-1 py-4 px-8 ${bodyClass}`}>
                    {body || <h2>Default body!</h2>}
                </div>
                <div className={`border-t border-gray-200 px-8 py-4 flex items-center ${footerClass}`}>
                    {footer || <h2>Default footer!</h2>}
                </div>
            </div>
        </div>
    );
}