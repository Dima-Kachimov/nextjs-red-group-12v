import React, {FC, PropsWithChildren} from 'react';
import { IMeta } from './meta.inerface'
import Head from "next/head";
import getTitle from "@/utils/seo_meta";

const Meta: FC<PropsWithChildren<IMeta>> = ({ title,description, children }) => {
    return (
        <>
            <Head>
                <title>{getTitle(title)}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                {description
                    ? <>
                        <meta name={'description'} content={description}/>
                        <meta name={'og:title'} content={getTitle(title)}/>
                        <meta name={'og:description'} content={description}/>
                    </>
                    : <meta name='robots' content='noindex, nofollow'/>}
            </Head>
            {children}
        </>
    );
};

export default Meta;