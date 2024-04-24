import React from 'react'
import {FcLike , FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify';

const Card = (props) => {
    let course =  props.course;
    let likedCourses =  props.likedCourses;
    let setLikedCourses =  props.setLikedCourses;
    function clickHandler() {
        // logic 
        if (likedCourses.includes(course.id)) {
            //pehle se like hua pada hai 
            setLikedCourses((prev)=>prev.filter(((cid)=>cid !== course.id)));
            toast.warning("Like removed");
        }
        else{
            // pehle se liked nahi hai ye course 
            // insert karna hai ye course liked courses mein 
            if (likedCourses.length === 0) {
                setLikedCourses([course.id]);
            }else{
                //non empty pehle se 
                setLikedCourses((prev)=>[...prev , course.id]);
            }
            toast.success("Liked succesfully");

        }
    }
  return (
    <div className='w-[300px] bg-gray-700 rounded-md overflow-hidden bg-opacity-75'> 
        <div className='relative'>
                <img src={course.image.url}/>
                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 -bottom-4 grid place-items-center'>
            <button onClick={clickHandler}>
            {
                likedCourses.includes
                (course.id) ?  (<FcLike fontSize="2rem"/>) : (<FcLikePlaceholder fontSize={"2rem"}/>)

            }
            
            </button>
        </div>
        </div>
       

        <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-7 text-nowrap '>{course.title}</p>
            <p className='mt-2 text-white'>

                {
                    course.description.length > 100 ? (course.description.substr(0,100)) + "...." : (course.description)
                }
            </p>
        </div>
    </div>
  )
}

export default Card