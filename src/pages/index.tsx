import React, { FC } from "react";
import Home from "@/components/screens/home/Home";
import {NextPage} from "next";
import {IUser, IUsersData} from "@/services/user.interface";
import axios from "axios";

async function getAllUser() {
    const { data } = await axios.get<IUser[]>('/users')
    return data
}

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users'), {
        next: { revalidate: 60 },
    })

    if (!response.ok) {
        throw new Error('Unable to fetch posts!')
    }
    return response.json()
}

const HomePage: NextPage<IUsersData> = async ({}) => {
    const users = await getData()
    return <Home users={users}/>
};


export default HomePage;

// SSG
// export const getStaticProps: GetStaticProps  = async () => {
//     const users = await getUserAllService.getAllUser()
//     return {
//         props: { users },
//         revalidate: 3,
//     }
// }

// Запрос на сервер и ответ готовый  HTML SSR
// export const getServerSideProps: GetServerSideProps = (async () => {
//     const users = await getUserAllService.getAllUser()
//     return { props: { users } }
// })
