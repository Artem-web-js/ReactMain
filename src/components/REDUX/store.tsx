import {PostsType} from "../Profile/Profile";
import {DialogsItemProps} from "../Dialogs/DialogItem/DialogItem";
import {MessageProps} from "../Dialogs/Message/Message";
import {FriendType} from "../Friends/Friend/Friend";
import profileReducer, {AddPostActionType, ChangeNewTextActionType} from "./profile-reducer";
import dialogsReducer, {ChangeNewBodyActionType, SendMessageActionType} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export type StoreType = {
    _state: stateType
    _callSubscriber: (props: stateType) => void
    // addPost: (message: string) => void
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionTypes) => void
    subscribe: (observer: (props: stateType) => void) => void
    getState: () => stateType
};
export type stateType = {
    profilePage: profilePageType
    messagesPage: messagePageType
    sidebar: Array<FriendType>
};
export type profilePageType = {
    posts: Array<PostsType>
    dialogsData: Array<DialogsItemProps>
    newPostText: string
};
export type messagePageType = {
    messageData: Array<MessageProps>
    newMessageBody: string
};

export type ActionTypes = ChangeNewTextActionType | AddPostActionType | ChangeNewBodyActionType | SendMessageActionType

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 15},
                {id: 2, message: "It is my first post!", likesCount: 20}
            ],
            dialogsData: [
                {
                    id: 1,
                    name: "Artem",
                    src: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                },
                {
                    id: 2,
                    name: "Maks",
                    src: "https://iso.500px.com/wp-content/uploads/2016/11/stock-photo-159533631-1500x1000.jpg"
                },
                {
                    id: 3,
                    name: "Sergey",
                    src: "https://picjumbo.com/wp-content/uploads/alone-with-his-thoughts-1080x720.jpg"
                },
                {
                    id: 4,
                    name: "Alina",
                    src: "https://www.pinkvilla.com/files/styles/gallery-section/public/mouni_roys_these_stunning_photos_will_leave_you_spellbound_check_it_out.jpg?itok=h_J5SVj3"
                },
                {
                    id: 5,
                    name: "Sabina",
                    src: "https://i2.wp.com/www.alphr.com/wp-content/uploads/2018/04/how_to_back_up_photos_on_google_photos.jpg?resize=563%2C563&ssl=1"
                },
                {
                    id: 6,
                    name: "Veronika",
                    src: "https://i.pinimg.com/originals/6d/c8/7a/6dc87ad6f004abcdfee40c25299b9502.jpg"
                }
            ],
            newPostText: "la-la-lend"
        },
        messagesPage: {
            messageData: [
                {id: 1, message: "Hi! How are you?"},
                {id: 2, message: "I'm fine! How about you?"},
                {id: 3, message: "I'm okay. What are you doing this night?"},
                {id: 4, message: "I going to do home tasks."},
                {id: 5, message: "How about to go to the cinema?"}
            ],
            newMessageBody: "",
        },
        sidebar: [
            {
                id: 1,
                name: "Artem",
                src: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            },
            {
                id: 2,
                name: "Maks",
                src: "https://iso.500px.com/wp-content/uploads/2016/11/stock-photo-159533631-1500x1000.jpg"
            },
            {
                id: 3,
                name: "Sergey",
                src: "https://picjumbo.com/wp-content/uploads/alone-with-his-thoughts-1080x720.jpg"
            },
            {
                id: 4,
                name: "Alina",
                src: "https://www.pinkvilla.com/files/styles/gallery-section/public/mouni_roys_these_stunning_photos_will_leave_you_spellbound_check_it_out.jpg?itok=h_J5SVj3"
            },
            {
                id: 5,
                name: "Sabina",
                src: "https://i2.wp.com/www.alphr.com/wp-content/uploads/2018/04/how_to_back_up_photos_on_google_photos.jpg?resize=563%2C563&ssl=1"
            }
        ]
    },
    _callSubscriber() {
        console.log('State changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

export default store;