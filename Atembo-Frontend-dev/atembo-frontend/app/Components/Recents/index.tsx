import React, { useState } from 'react';
import useGetUser from '@/app/hooks/useGetUser';
import useGetFlowrate from '@/app/hooks/useGetFlowrate'; 

const Recents = () => {
  const { user, lastAddedUser } = useGetUser();
  const totalUsers = user.length;

  const { flowrate, loading } = useGetFlowrate(); 

  const systems = flowrate
    .map((data) => ({
      id: data.device.toString(),
      status: data.flow_rate > 0 ? 'Working' : 'Failing',
    }))
    .slice(0, 4); 
  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <div className="bg-green-100 ml-[50px] w-[450px] h-[35vh] mt-[130px] rounded-xl flex-column body">
        <div className="p-3">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-green-900 tracking-wider">
                  System ID
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-green-900 tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {systems.map((system) => (
                <tr key={system.id} className="bg-gray-100 hover:bg-gray-200">
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                    {system.id}
                  </td>
                  <td
                    className={`px-6 py-4 whitespace-no-wrap border-b border-gray-300 ${
                      system.status === 'Working' ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {system.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex gap-5 mt-[100px] bottom">
          <div className="bg-[#B4FCA2] w-[50%] h-[20vh] rounded-xl s1">
            <p className="b text-[#156700] font-bold ml-[35px] pt-10 text-xl">
              Total Developers
            </p>
            <p className="num text-[#156700] ml-[100px] mt-5 text-2xl">
              {totalUsers}
            </p>
          </div>
          <div className="bg-[#D9D9D9] w-[45%] h-[20vh] rounded-xl s2">
            <p className="text-[#156700] font-bold ml-[45px] pt-10 text-xl b">
              Last Added
            </p>
            <p className="num2 text-[#156700] ml-[50px] mt-5">{lastAddedUser}</p>
          </div>
        </div>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            .body{
              margin-left:-275px;
              margin-top:900px;
              width:350px;
              height:50vh;
              padding-bottom:20px;
            }
            .num{
              margin-left:70px;
              margin-top:-10px
            }
            .flex.gap-5{
              margin-top:50px;
            }
          }
          @media (max-width: 300px) {
            .body{
              margin-left:-275px;
              margin-top:900px;
              width:350px;
              height:50vh;
              padding-bottom:20px;
            }
            .num{
              margin-left:70px;
              margin-top:-10px
            }
            .flex.gap-5{
              margin-top:50px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Recents;