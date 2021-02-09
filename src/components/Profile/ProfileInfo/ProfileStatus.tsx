import React from "react";

type ProfileStatusType = {
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
          editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
          editMode: false
        })
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input value={this.props.status} onBlur={this.deactivateEditMode.bind(this)} autoFocus={true}/>
                    </div>
                    : <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>}

            </div>
        )
    }

}

export default ProfileStatus;