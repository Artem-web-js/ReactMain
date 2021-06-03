import profileReducer, {addPostActionCreator, deletePost, ProfilePageType} from "./profile-reducer";

let initialState = {} as ProfilePageType

beforeEach(() => {
    initialState = {
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
        profile: null,
        status: '',
        newPost: ''
    };
})

test('new post should be added', () => {
    let action = addPostActionCreator("it-camasutra.com")
    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(3);
    expect(newState.posts[2].message).toBe("it-camasutra.com");
})

test('post should be deleted', () => {
    let action = deletePost(1);
    let newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(1);
    expect(newState.posts[1]).toBeUndefined();
})