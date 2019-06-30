import React from 'react'
import { Redirect } from 'react-router-dom'


const withAuth = (ComponentToProtect) => {
    return function (props) {

        const authInfo = JSON.parse(sessionStorage.getItem('authInfo'))

        if (authInfo) {
            return (
                <React.Fragment>
                    <ComponentToProtect {...props} authInfo={authInfo}/>
                </React.Fragment>
            )
        }

        return <Redirect to="/login" />;
    }
}

export default withAuth