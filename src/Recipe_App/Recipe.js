import React from 'react';

const Recipe = ({title,calories,image}) => {

  return (
      <>
      <p className="para">
      <p style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"crimson",color:"white", marginTop:"5px"}}> {title}</p>
      <p style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"grey",color:"black"}}> CALORIE :  {calories}</p>
      <img src={image} alt="" style={{width:"500px"}}/>
     </p>
</>
)
  }
  export default Recipe;