import { useEffect, useState } from "react";
import { AppBarIn } from "./AppBarIn";
import axios from "axios";
import { baseURL } from "../../constant";
import { AppBarN } from "./AppBarN";

export function AppBar() {
    const [user, setUser] = useState();
    const [loading,setLoading]=useState(true);
    useEffect(() => {
        const token = "Bearer " + window.localStorage.getItem("Token");
        try {
            axios.get(`${baseURL}/admin/me`, {
                headers: {
                    authorization: token
                }
            }).then((response) => {
                
                setUser(response.data);
            })
        }
        catch (err) {
            console.error(err);
        }
        setLoading(false);
    })
    if(user){
        return (
            <AppBarIn/>
        )
    }
    if(loading){
        return (
            <div>loading...</div>
        )
    }

    return (
        <AppBarN />
    )
}