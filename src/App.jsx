import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import { apiUrl , filterData } from './Data'
import Loading from './components/Loading'
import { useEffect } from 'react'
import { toast } from 'react-toastify'


const App = () => {

  const [ courses  ,setCourses] = useState(null);
  const [loading  , setLoading] = useState(true);
  const [category , setCategory] = useState(filterData[0].title);


  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();

      // output ->0
      setCourses(output.data);
      
    } catch (error) {
          toast.error("Netwrk ka chakkar babu bhaiya ")
    }

    setLoading(false);
  }


  // on first render call krr diya 
  useEffect(() => {
    fetchData();
  }, [])
  
  return (
    <div className='min-h-screen flex flex-col bg-gray-900'>

      <div>
      <Navbar/>
      </div>  

      <div>
        <Filter filterData={filterData} setCategory={setCategory}/>
      </div>
      <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
      {/* yaa to ek time prr spinner yaa to ek time prr card  */}
        {
          loading ? (<Loading/>) : (<Cards courses={courses} category={category}/>)
        }
      </div>
    </div>
  )
}

export default App