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
            <div className="rounded-2xl bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col min-w-fit md:w-3/4 lg:w-1/2 max-w-96 min-h-fit max-h-96 md:h-3/4">
                <div id="header"
                     className={`relative border-b border-gray-200 p-4 flex items-center ${headerClass}`}>
                    {header || <h2>Default header!</h2>}
                    <Buttons handleClick={handleCloseModal}
                             className="absolute top-1/2 -translate-y-1/2 right-4">
                        <CloseIcon/>
                    </Buttons>
                </div>
                <div id="body"
                     className={`flex-1 p-4 max-h-svh overflow-auto ${bodyClass}`}>
                    {body || <h2>Default body!</h2>}
                </div>
                <div id="footer"
                     className={`border-t border-gray-200 p-4 flex items-center ${footerClass}`}>
                    {footer || <h2>Default footer!</h2>}
                </div>
            </div>
        </div>
    );
}