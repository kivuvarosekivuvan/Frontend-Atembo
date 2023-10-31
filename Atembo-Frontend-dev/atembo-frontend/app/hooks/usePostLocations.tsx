'use client';
import { postLocations } from '@/app/Utilities/utils';
import { useState } from 'react';

interface LocationsData {
  id: number;
  region_name: string;
  installation_date: string;
  updated_at: string;
}

const usePostLocations = () => {
  const [locations, setLocations] = useState<LocationsData[]>([]);

  const fetchLocations = async () => {

      const newLocations = await postLocations();
      setLocations(newLocations);
       
    
  };

  return { locations, fetchLocations };
};

export default usePostLocations;