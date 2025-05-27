import { useEffect } from "react";
import { useState } from "react";
import "../App.css";


export const GetUser = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/getUser`)
      .then((result) =>
        result.json().then((res) => {
          // console.log("data from get url",res.data)
          setData(res.data);
        })
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEdit =(id)=>{
    
  }
  const handleDelete =(data)=>{
    
  }

  return (
    <>
      <div className="getData">
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Ph</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.ph}</td>
              <td onClick={()=>handleEdit(item._id)}>Edit</td>
              <td onClick={()=>handleDelete(item._id)}>Delete</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};
