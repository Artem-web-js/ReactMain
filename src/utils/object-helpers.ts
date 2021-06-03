import {UsersItemsType} from "../redux/users-reducer";

export const updateObjectInArray = (items: Array<UsersItemsType>, itemId: number, objPropName: string, newObjProps: {}) => {
    return items.map((u: any) => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}