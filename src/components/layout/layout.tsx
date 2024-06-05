import React, {FC, PropsWithChildren} from "react";
import Header from "@/components/layout/header/Header";
import Meta from "@/components/seo/Meta";
import {IMeta} from "@/components/seo/meta.inerface";
import Footer from "@/components/layout/footer/Footer";
import dynamic from "next/dynamic";

// Отключение ssr
const DynamicFooter = dynamic(() => import('./footer/Footer') ,{
    ssr: false,
})

const Layout: FC<PropsWithChildren<IMeta>> = ({children, title, description}) => {
    return (
        <Meta title={title} description={description}>
            <Header/>
            {children}
            <DynamicFooter/>
        </Meta>
    )
}
export default Layout;