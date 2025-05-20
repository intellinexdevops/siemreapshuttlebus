import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import React, { Fragment } from "react";

export default function FrontEndLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <Fragment>
            <HeaderComponent />
            {children}
            <FooterComponent />
        </Fragment>
    )
}