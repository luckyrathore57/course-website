import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseURL } from "../../constant";
import { CourseType } from "../../types";
import { CourseInput, CoursePreview } from "./CreateCourse";

export function CourseUpdate() {
    const { courseId } = useParams();
    const [initialState,setInitialState]=useState<CourseType>({ title: "", description: "", price: 0, imageLink: "", published: false });
    const token = `Bearer ${window.localStorage.getItem("Token")}`;
    
    
    
    const handleUpdate= async ({ title, description, price, imageLink, published }: CourseType) => {
        
        try {
            const response = await axios.put(`${baseURL}/admin/courses/${courseId}`, {
                title, description, price, imageLink, published,
            }, {
                headers: {
                    authorization: token
                }
            });
            if (response) {
                alert("course update successfully")
            }

        }
        catch (err) {
            console.error("error",err);
        }
    }


    useEffect(() => {
        
        try { 
            axios.get(`${baseURL}/admin/course/${courseId}`, {
                headers: {
                    authorization: token
                }
            }).then((response)=>{
                if(response.data){
                    setInitialState(response.data);
                }
            })
        }
        catch (err) {

            console.error(err);

        }
    },[])

    
    
    return (
        <div className="h-screen flex  justify-center items-center py-6">
            <div className="md:grid-cols-2 grid grid-cols-1 items-center gap-5 w-screen h-screen">
                <div className="flex justify-center">
                    <CourseInput handleSubmit={handleUpdate} operation="Update"
                    initialState={initialState} />
                </div>
                <div className="flex justify-center">
                    <CoursePreview />
                </div>
            </div>
        </div>
    )
}