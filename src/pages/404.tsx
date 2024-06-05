import React from 'react';
import Image from "next/image";
import Head from "next/head";
import Layout from "@/components/layout/layout";

const NotFound
= () => {
    return (
        <Layout title={'404'}>
            <div style={{ textAlign: "center" }}>
                <Image priority={true} src="/404.png" alt="404" width={600} height={400}/>
            </div>
        </Layout>
    );
};

export default NotFound;