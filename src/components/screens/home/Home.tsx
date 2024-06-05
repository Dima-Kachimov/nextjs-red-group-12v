import React, {FC} from 'react';
import Layout from "@/components/layout/layout";
import {IUser, IUsersData} from "@/services/user.interface";
import UserItem from "@/components/ui/user/UserItem";

import s from './Home.module.css'
import Link from "next/link";
import axios from "axios";



const Home: FC<IUsersData> = ({ users }) => {

    return (
        <Layout title={'Home'} description={'Cars RED, Generated by create next app'}>
            <main>
                 <h1>HomePage</h1>
                <hr/>
                <ul className={s.userList}>
                    {users.length
                        ? users.map((user) =>
                            <li className={s.item} key={user.id}>
                                <Link href={`/user/${user.id}`}><UserItem user={user} /></Link>
                            </li>)
                        : <div>Cars not found</div>}
                </ul>
            </main>
        </Layout>
    );
};

export default Home;