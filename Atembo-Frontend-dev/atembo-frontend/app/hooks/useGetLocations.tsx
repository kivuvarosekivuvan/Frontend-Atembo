'use client'

import { getLocations } from "@/app/Utilities/utils";
import { useEffect, useState } from "react";

interface LocationsData{
    id:number;
    region_name:string;
    installation_date:string;
    updated_at:string;
}
const useGetLocations=()=>{
    const [locations, setLocations]=useState<LocationsData[]>([]);
    useEffect(()=>{
      (async()=>{
        const locations=await getLocations();
        setLocations(locations);        
      })();
    },[])
    return {locations}
  
  
}
export default useGetLocations