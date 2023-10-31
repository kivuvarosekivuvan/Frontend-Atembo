import { getTemp } from "../Utilities/utils";
import { useEffect,useState } from "react";
interface TempData{
    id:number;
    device:number;
    time_stamp:string;
    humidity_with_unit:string;
    temperature_with_unit:string;
}
const useGetTemp=()=>{
    const [temp, setTemp]=useState<TempData[]>([]);
    useEffect(()=>{
      (async()=>{
        const temp=await getTemp();
        setTemp(temp);
      })();
    },[])
    return {temp}
}
export default useGetTemp