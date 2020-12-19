import React from "react";
import * as axios from 'axios';

class Users extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        //@ts-ignore
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response: any) => {
                this.props.setUser(response.data.items)
            });
    }

    render() {
        return <div>
            {
                this.props.users.map((u: any) => <div key={u.id}>
                <span>
                    <div>
                        <img
                            src={u.photos.small != null ? u.photos.small : "https://www.netclipart.com/pp/m/283-2833820_user-icon-orange-png.png"}
                            alt="userPhoto"/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    }
}

export default Users;