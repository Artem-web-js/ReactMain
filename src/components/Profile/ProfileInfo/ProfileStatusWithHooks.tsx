import React, {ChangeEvent, useEffect, useState} from "react";

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus((props.status))
    }, [props.status])

    let onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
            setStatus(e.currentTarget.value)
    }

    let activateEditMode = () => {
        setEditMode(true)
    }

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    return (
        <div>
            {editMode
                ? <div>
                    <input onChange={onStatusChange} value={status} onBlur={deactivateEditMode} autoFocus={true}/>
                </div>
                : <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'Write your status.'}</span>
                </div>}

        </div>
    )
}


export default ProfileStatusWithHooks;