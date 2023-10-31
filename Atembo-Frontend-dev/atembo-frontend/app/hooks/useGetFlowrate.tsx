
import { getFlowrate } from "../Utilities/utils";
import { useEffect,useState } from "react";

interface FlowrateData{
    time_stamp:string;
    flow_rate:number
    id:number;
    device:number
}


const useGetFlowrate = () => {
  const [flowrate, setFlowrate] = useState<FlowrateData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const flowrateData = await getFlowrate();
        setFlowrate(flowrateData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return { flowrate, loading };
};

export default useGetFlowrate;
