import React from 'react';  
import { Button } from "antd";  

const Reusebtn = ({title, onClick}) => {  
  return (  
    <Button  
      htmlType="submit"  
      className="h-12 text-base hover:font-bold w-full rounded-3xl bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 text-white"  
      size="small"  
      onClick={onClick} // Add onClick event here to handle the click  
    >  
      {title}  
    </Button>   
  );  
}  

export default Reusebtn; 