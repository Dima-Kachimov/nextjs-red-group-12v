import React, {FC} from 'react';
import {useRouter} from "next/router";
import {IUser, IUserDataSingle} from "@/services/user.interface";
import Layout from "@/components/layout/layout";
import UserItem from "@/components/ui/user/UserItem";
import {GetStaticPaths, GetStaticProps} from "next";
import {getUserAllService} from "@/services/user.services";

const UserPage: FC<IUserDataSingle> = ({user}) => {
    // Использование useRouter()
    // const {asPath, pathname, query, push,replace} = useRouter();

    return (
        <Layout title={user.name}>
            <main><UserItem user={user}/></main>
        </Layout>
    );
};
export default UserPage;


// Получаем масив путей getStaticPaths()
export const getStaticPaths: GetStaticPaths = async () => {
    const users = await getUserAllService.getAllUser();
    return {
        paths: users.map((user: IUser) => ({
            params: { id: user.id.toString() }
        })),
        fallback: 'blocking'
    };
};

// Запрашиваем данные для статической генерации SSG
export const getStaticProps: GetStaticProps<IUserDataSingle> = async ({ params }) => {
    const user = await getUserAllService.getIdUser(String(params?.id));
    return {
        props: { user },
        revalidate: 3,
    };
};