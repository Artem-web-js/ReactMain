import usersReducer, {followAC} from "../users-reducer";

test("", () => {
    let startState = {
        users: [
            {
                "name": "maximLomako",
                "id": 13597,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "AlexWind",
                "id": 13596,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "03301993Ss",
                "id": 13595,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "aleksmz12",
                "id": 13594,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "Rupert_XXX",
                "id": 13593,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            }
        ],
        pageSize: 7,
        totalUsersCount: 0,
        currentPage: 1
    }

    //let endState = usersReducer(startState, followAC(13597))
})