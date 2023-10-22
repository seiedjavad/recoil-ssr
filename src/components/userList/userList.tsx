import {useRecoilValue} from "recoil";
import {userAtom} from "@/atoms/users";

export const UserList=()=>{
    const userData = useRecoilValue(userAtom)
    return(<div>{userData.name}</div>);
}