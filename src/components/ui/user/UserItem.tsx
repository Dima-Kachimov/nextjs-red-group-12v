import React, {FC} from 'react';
import { IUserDataSingle } from "@/services/user.interface";

const UserItem: FC<IUserDataSingle> = ({ user }) => {
    return (
        <div>
            <h1>{user.name}</h1>
            <p>Email - {user.email}</p>
        </div>
    );
};

export default UserItem;