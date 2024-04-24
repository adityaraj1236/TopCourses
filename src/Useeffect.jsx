// import React, { useEffect, useState } from 'react'

// const useeffect = () => {
//   const[text,setText] = useState('');


// // useeffect hook usecase

// // variation 1 -> ek baar ye component render hote hi ye hota hai 
// // useEffect(()=>{
// //    console.log("UI Rendering done");
// // })



// // varition 2 -> ab ham chahte maano bss first ek baar prr UI rendering krre 
// // useEffect(()=>{
// //     console.log("UI Rendering done")
// // } ,[])




// // variation 3  --> on first render +  whenever dependency changes 
// // useEffect(()=>{
// //     console.log("Change Observed");
// // } ,[text])



// // variation 4  on every render add event listener 
// // to handle unmounting of a component  
// // useEffect(()=>{

// //   // add event listener 
// //   console.log("Listener added");


// //   return(()=>{
// //     console.log("Listener Removed");
// //   })


// // },[text]);
// // iska usecase --> usko add krne se pehle poorane wa;a remove krna padega 




//   function changeHandler(event) {
//     setText(event.target.value);
//     console.log(text);
    
//   }
//   return (
//     <div>
//       <input type='text'
//       className='border-2 border-red-800'
//       onChange={changeHandler}
//       />


//       <textarea 
//       className='border-4'
//       />
//     </div>
//   )
// }

// export default useeffect ;