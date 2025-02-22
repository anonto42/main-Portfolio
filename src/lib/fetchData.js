import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setDataOfProject , setDataOfMessage } from "../Redux/Slices/MainDataSlice";

const libDataFetch = () => {
    try {
            const [ projects , setProjects ] = useState([]);
            const [ messages , setMessages ] = useState([]);
            const dispatch = useDispatch()
        
        useEffect(()=>{
            
            axios.get('https://main-porthfolio-backend.vercel.app/api/admin/getProjecs')
                 .then( receive => setProjects(receive.data))

            axios.get("https://main-porthfolio-backend.vercel.app/api/admin/getMessages")
                 .then( receive => setMessages(receive.data) )
            
        },[]);
        
        useEffect(()=>{

            dispatch(setDataOfProject(projects));
            dispatch(setDataOfMessage(messages));

        },[projects]);

    } catch (error) {
        toast.error('Failed to fetch data. Please try again later.')
        console.log(error)
    }
}



export default libDataFetch;