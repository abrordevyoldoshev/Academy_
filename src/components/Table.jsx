import React, {useEffect, useState} from 'react';
import axios from "axios";

const Table = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
       axios.get('https://westco-task.herokuapp.com/').then((res)=>{
             console.log(res.data.cours)
            setData(res.data.cours)
       })
    },[])

    return (
        <div>
           <table>
               <thead style={{border:'1px solid #000000',width:'100%'}}>
               <tr>
                   <th>#</th>
                   <th>Img</th>
                   <th>Name</th>
                   <th>AuthorId</th>
                   <th>Price</th>
                   <th>description</th>
               </tr>
               </thead>
               <tbody>
               {data.map((dates,index)=>{
                   return(
                       <tr key={index}>
                           <td>{index + 1 }</td>
                           <td ><img style={{width:'50px'}} src={dates.courseImg} alt="404 not found"/></td>
                           <td> {dates.name}</td>
                           <td>{dates.authorId}</td>
                           <td>{dates.price}</td>
                           <td>{dates.description}</td>
                       </tr>
                   )
               })}
               </tbody>
           </table>
        </div>
    );
};

export default Table;