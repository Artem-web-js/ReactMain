import usersReducer, {followAC, unfollowAC, UsersReducerState} from "../users-reducer";

let startState: UsersReducerState

beforeEach(() => {
    startState = {
        users: [
            {
                "name": "maximLomako",
                "id": 13597,
                "photos": {
                    "small": "",
                    "large": ""
                },
                "status": "",
                "followed": false
            },
            {
                "name": "AlexWind",
                "id": 13596,
                "photos": {
                    "small": "",
                    "large": ""
                },
                "status": "",
                "followed": true
            },
            {
                "name": "03301993Ss",
                "id": 13595,
                "photos": {
                    "small": "",
                    "large": ""
                },
                "status": "",
                "followed": false
            },
            {
                "name": "aleksmz12",
                "id": 13594,
                "photos": {
                    "small": "",
                    "large": ""
                },
                "status": "",
                "followed": false
            },
            {
                "name": "Rupert_XXX",
                "id": 13593,
                "photos": {
                    "small": "",
                    "large": ""
                },
                "status": "",
                "followed": false
            }
        ],
        pageSize: 7,
        totalUsersCount: 0,
        currentPage: 1
    }
})

test("should be followed", () => {
    let endState = usersReducer(startState, followAC(13597))

    expect(endState.users[0].followed).toBeTruthy()
})

test("should be unfollowed", () => {
    let endState = usersReducer(startState, unfollowAC(13596))

    expect(endState.users[1].followed).toBeFalsy()
})