import {UserList} from "@/components/userList";
import {GetInitialRecoilState} from "@/types";
import {userAtom} from "@/atoms/users";

 const Users=(props)=>{
     console.log(props)
    return(<div>users
    <UserList />
    </div>)
}

export async function getServerSideProps(){
     let usersDataSample=[]
    await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => usersDataSample = json)
     return{
         props:{
             usersData:usersDataSample
         }
     }
}

const getInitialRecoilState: GetInitialRecoilState<any> = (
    pageProps,
    mutableSnapshot
) => {
    mutableSnapshot.set(userAtom, pageProps.usersData);
};

Users.getInitialRecoilState = getInitialRecoilState;

export  default  Users;