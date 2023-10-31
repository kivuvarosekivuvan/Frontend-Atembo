
'use client'
import React from "react";
import Layout from "../Components/Layout";
import Link from "next/link";
import useGetLocations from "../hooks/useGetLocations";

const SystemlistsPage = () => {
  const { locations } = useGetLocations();

  return (
    <div>
      <Layout>
        <h1 className="text-4xl text-green font-bold mb-4 text-center mt-10">
          SYSTEM LISTS
        </h1>
        <div className="w-full flex justify-center mt-10">
          <table className="w- table-auto rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-gray">
                <th className="px-6 py-3 pl-50 text-left text-lg text-green tracking-wider">
                  System ID
                </th>
                <th className="px-6 py-3 pl-60 text-left text-lg text-green tracking-wider">
                  Location
                </th>
                <th className="px-6 pl-80 py-3 text-left text-lg text-green tracking-wider">
                  Installation Date
                </th>
              </tr>
            </thead>
            <tbody>

              {Array.isArray(locations) && locations.length > 0 ? (
                locations.map((location) => (
                  <tr
                    key={location.id}
                    className="bg-gray-100 hover:bg-gray transition duration-300"
                  >
                    <td className="px-6 py-4 border-b border-gray text-left pr-6 pl-50">
                      <Link href={`systemData`}>{location.id}</Link>
                    </td>
                    <td className="px-6 py-4 border-b border-gray text-left pr-6 pl-60">
                      {location.region_name}
                    </td>
                    <td className="px-6 py-4 border-b border-gray text-left pr-6 pl-80 text-green">
                    {location. installation_date}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="text-center py-4">
                    No locations found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Layout>
    </div>
  );
};

export default SystemlistsPage;

































// import Layout from '../Components/Layout';
// import Link from 'next/link';

// const SystemlistsPage = () => {
//   const systemList = [
//     { id: '001', location: 'Kisumu', status: 'Working' },
//     { id: '002', location: 'Kariok', status: 'Not working' },
//     { id: '003', location: 'Nakuru', status: 'Working' },
//     { id: '004', location: 'Karen', status: 'Working' },
//     { id: '005', location: 'Kikuyu', status: 'Not working' },
//     { id: '006', location: 'BabaDogo', status: 'Working' },
//     { id: '007', location: 'Kawangware', status: 'Working' },
//     { id: '008', location: 'AkiraChix', status: 'Not working' },
//     { id: '009', location: 'Kakamega', status: 'Working' },
//     { id: '010', location: 'Mombasa', status: 'Working' },
//   ];
//   return (
//     <div>
//       <Layout>
//         <h1 className="text-4xl text-green font-bold mb-4 text-center mt-10">
//           SYSTEM LISTS
//         </h1>
//         <div className="w-full flex justify-center mt-10">
//           <table className="w- table-auto rounded-lg overflow-hidden shadow-lg">
//             <thead>
//               <tr className="bg-gray">
//                 <th className="px-6 py-3 pl-50 text-left text-lg text-green tracking-wider">
//                   System ID
//                 </th>
//                 <th className="px-6 py-3 pl-60 text-left text-lg text-green tracking-wider">
//                   Location
//                 </th>
//                 <th className="px-6 pl-80 py-3 text-left text-lg text-green tracking-wider">
//                   Status
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {systemList.map((system) => (
//                 <tr
//                   key={system.id}
//                   className="bg-gray-100 hover:bg-gray transition duration-300"
//                 >
//                   <td className="px-6 py-4 border-b border-gray text-left pr-6 pl-50">
//                     <Link href={`systemData`}>{system.id}</Link>
//                   </td>
//                   <td className="px-6 py-4 border-b border-gray text-left pr-6 pl-60">
//                     {system.location}
//                   </td>
//                   <td
//                     className={`px-6 py-4 border-b border-gray text-left pr-6 pl-80 ${
//                       system.status === 'Working' ? 'text-green' : 'text-red'
//                     }`}
//                   >
//                     {system.status}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </Layout>
//     </div>
//   );
// };

// export default SystemlistsPage;



// SystemlistsPage.js