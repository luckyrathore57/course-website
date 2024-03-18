import { useEffect, useState } from "react";
import { CourseType } from "../../types";
import axios from "axios";
import { baseURL } from "../../constant";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {courseEditAtom } from "../../store/atom/atom";

export function CreateCourse() {
    const token = "Bearer " + window.localStorage.getItem("Token");


    const handleCreateCourse = async ({ title, description, price, imageLink, published }: CourseType) => {
        
        try {
            const response = await axios.post(`${baseURL}/admin/courses`, {
                title, description, price, imageLink, published,
            }, {
                headers: {
                    authorization: token
                }
            });
            if (response) {
                alert("course create successfully");
            }

        }
        catch (err) {
            console.error(err);
        }
    }


    return (
        <div className="h-screen flex  justify-center items-center py-6">
            <div className="md:grid-cols-2 grid grid-cols-1 items-center gap-5 w-screen h-screen">
                <div className="flex justify-center">
                    <CourseInput handleSubmit={handleCreateCourse} operation="Create" initialState={{title:"",description:"",price:0,imageLink:"",published:false}} />
                </div>
                <div className="flex justify-center">
                    <CoursePreview />
                </div>
            </div>
        </div>
    )
}

export function CourseInput({ handleSubmit,operation,initialState}: { handleSubmit: ({ title, description, price, imageLink, published }: CourseType) => Promise<void>; operation: string; initialState:CourseType}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [imageLink, setImageLink] = useState("");
    const [published, setPublished] = useState(false);


    const setCourse=useSetRecoilState(courseEditAtom);
    
    useEffect(()=>{
        setTitle(initialState.title);
        setDescription(initialState.description);
        setPrice(initialState.price);
        setImageLink(initialState.imageLink);
        setPublished(initialState.published);
        setCourse(initialState)
    },[initialState])

    return (
        <div className="w-full block h-fit max-w-md px-20 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">

            <h5 className="text-xl font-medium text-center text-gray-900">{operation} Course</h5>
            <br />


            <div className="relative h-10 w-full min-w-[200px]">
                <input placeholder="Title" type="text" value={title}
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-1 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" required onChange={(e) => setTitle(e.target.value)} />
                <label
                    className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Title
                </label>
            </div>
            <br />
            <div className="relative h-10 w-full min-w-[200px]">
                <input placeholder="Description" type="text" value={description}
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-1 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" required onChange={(e) => setDescription(e.target.value)} />
                <label
                    className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Description
                </label>
            </div>
            <br />
            <div className="relative h-10 w-full min-w-[200px]">
                <input placeholder="Price" type="number" value={price}
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-1 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" required onChange={(e) => setPrice(Number(e.target.value))} />
                <label
                    className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Price
                </label>
            </div>
            <br />
            <div className="relative h-10 w-full min-w-[200px]">
                <input placeholder="Image Link" type="text" value={imageLink}
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-1 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" required onChange={(e) => setImageLink(e.target.value)} />
                <label
                    className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Image Link
                </label>
            </div>

            <br />
            

            <div className="flex items-center">
                <input id="publised" type="checkbox"  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "checked={published} onChange={() => { setPublished((i) => (!i)) }} />
                <label htmlFor="publised" className="ms-2 text-sm font-medium text-gray-900 ">Publised</label>
            </div>

            <br />
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={()=>{
                handleSubmit({title,description,price,imageLink,published});
                setCourse({ title, description, price, imageLink, published });  
                }}>{operation} Course</button>


        </div>

    )
}

export function CoursePreview() {
    const course=useRecoilValue(courseEditAtom);
    return (
        <div>
            <div className="relative flex max-w-md min-w-sm h-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-3/5 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={course.imageLink}
                        className=" h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {course.title}
                        </p>
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {`₹${course.price}`}
                        </p>
                    </div>
                    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        {course.description}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <button
                        className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        edit course
                    </button>
                </div>
            </div>

        </div>
    )
}



