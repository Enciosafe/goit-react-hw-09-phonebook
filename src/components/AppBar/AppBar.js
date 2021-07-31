import Navigation from "./Navigation";
import AuthNav from "./AuthNav";
import User from "../User/User";
import {useSelector} from "react-redux";
import {authSelectors} from "../../redux/auth";




export default function AppBar () {

    const isAuthenticated = useSelector(authSelectors.getIsAuthenticated)
    return <>
        <Navigation />
        {isAuthenticated ? <User/>: <AuthNav/>}
        </>
}