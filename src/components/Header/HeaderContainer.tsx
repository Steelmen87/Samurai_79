import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reduser";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        usersAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });

    }

    render() {

        //@ts-ignore
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({

    isAuth: state.auth.isAuth,
    login: state.auth.login,
});
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);