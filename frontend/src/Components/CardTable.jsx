import React, { useMemo } from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "./TableDropdown";
import Tables from "./Tables";
import { useSelector } from "react-redux";
import Table from "./Table";
import { Link } from "react-router-dom";

export default function CardTable({ columns, data, color, heading, route }) {
  
  
  // const columns = useMemo(
  //   () => [
  //     {
  //       Header: 'USER',
  //       accessor: ['image', 'user_name'],
  //       Cell: (row) => {
  //         return row.value &&
  //           <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
  //             <img
  //               src={'http://example.com/'}
  //               className="h-12 w-12 bg-white rounded-full border"
  //               alt="..."
  //             ></img>{" "}
  //             <span
  //               className={
  //                 "ml-3 font-bold " +
  //                 +(color === "light" ? "text-blueGray-600" : "text-white")
  //               }
  //             >
  //               Argon Design System
  //             </span>
  //           </th>

  //       }
  //     },
  //     {
  //       Header: 'PACKAAGE NAME',
  //       accessor: 'package.name',
  //       Cell: (row) => (
  //         <span style={{ "cursor": "pointer" }} onClick={() => console.log(row.row.values._id)}> {row.value}</span>
  //       )
  //     },
  //     {
  //       Header: 'PACKAAGE PRICE',
  //       accessor: 'package.price',
  //     },

  //     {
  //       Header: 'TEAM',
  //       accessor: ['direct_members', 'indirect_members'],
  //     },

  //   ], []);
  // {
  //   Header: 'BALANCE',
  //     accessor: 'money',
  //     },
  // {
  //   Header: 'REFERRAL CODE',
  //     accessor: 'referral',
  //     },
  // {
  //   Header: 'STATUS',
  //     accessor: 'status',
  // Cell: (row) => {
  //   return row.value ?
  //     <button style={{ background: "green", color: "#fff" }} disabled>Activate</button> :
  //     <button style={{ background: "red", color: "#fff" }} disabled>Deactivate</button>
  // }
  // },
  // const data = [

  //   {
  //     "_id": "6433365444444",
  //     "username": "test user",
  //     "email": "test@info.com",
  //     "phonenumber": "12345667889",
  //     "money": 0,
  //     "referral": '123d22',
  //     "status": false
  //   }
  // ]

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                {heading}
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <Link to={route}
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                
              >
                See all
              </Link>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <Table columns={columns} data={data} color={color} />
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
