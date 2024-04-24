import React, { useState } from 'react'
import Card from  './Card'

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
const [likedCourses , setLikedCourses] = useState([]);
  
  // console.log("PRinting data");
  // console.log(courses);

  function getCourses() {
    if (category== "All") {
      let allCourses =  [] ;
    Object.values(courses).forEach(array=>{
      array.forEach(courseData=>{
        allCourses.push(courseData);
      })
    })
    return allCourses ;
  }
  else{
    //main sirf specific category ka data array  pass krunga
    return courses[category];

  }
  
      
    }
    
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>

    {/* ab hame yha multiple card banana hai  */}
    {/* so we will use map function but map function to bs ek array mein chahiye na poore ke poore  */}

    {/* aur yhan o ab tkk  hai nai  */}
    {/* to ham pehle convert krenge ek single array mein  */}


      {
        getCourses().map((course)=>(
          <Card key={course.id} course = {course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
          />
        ))
      }
    

    </div>
  )
}

export default Cards