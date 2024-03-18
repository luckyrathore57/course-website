import { atom } from "recoil";


export const courseEditAtom=atom({
    key:"courseState",
    default:{title:"",description:"",price:0,imageLink:"",published:false}
})


