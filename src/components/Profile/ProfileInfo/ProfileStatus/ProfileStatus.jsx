import React from 'react'

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }

    deactivateEditMode = () => {
        this.setState({editMode: false})
    }

    render() {
        return (<div>
            {this.state.editMode
                ? <input autoFocus
                         onBlur={this.deactivateEditMode}
                         value={this.props.profileStatus} />
                : <span onDoubleClick={this.activateEditMode}>
                    {this.props.profileStatus}
            </span>}
        </div>)
    }
}

export default ProfileStatus
