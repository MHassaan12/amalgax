import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import Tables from '../../Components/Tables'
import { useGetHistroyQuery } from '../../store/api/usersApi';
import myAvatar from "../../assets/myAvatar.png";

function Team({ userId, color = 'light' }) {
  const { directMembers, indirectMembers } = useSelector(state => state.auth);
  const columns = useMemo(
    () => [
      {
        Header: 'USER',
        accessor: 'user_name',
        Cell: ({ row }) => {

          return (<th className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-left flex items-center">
            <img
              src={row.original.image}
              onError={event => {
                event.target.src = myAvatar
                event.onerror = null
              }}
              className="h-12 w-12 bg-white rounded-full border"
              alt="..."
            ></img>
            <span
              className={
                "ml-3 font-bold " +
                +('light' === "light" ? "text-blueGray-600" : "text-white")
              }
            >
              {`${row.original.first_name} ${row.original.last_name}`}
            </span>
          </th>)

        }
      },
      {
        Header: 'PACKAAGE NAME',
        accessor: 'package.name',
        Cell: (row) => (
          <span style={{ "cursor": "pointer" }} onClick={() => console.log(row.row.values._id)}> {row.value}</span>
        )
      },
      {
        Header: 'PACKAAGE PRICE',
        accessor: 'package.price',
      },
      {
        Header: 'TEAM',
        accessor: 'package.direct_members',
        Cell: ({ row }) => (<div className="flex mb-5 -space-x-4">
          <img className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src={row.original.image} onError={event => {
            event.target.src = myAvatar
            event.onerror = null
          }} alt="" />
          <img className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src={row.original.image} onError={event => {
            event.target.src = myAvatar
            event.onerror = null
          }} alt="" />
          <img className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src={row.original.image} onError={event => {
            event.target.src = myAvatar
            event.onerror = null
          }} alt="" />
          <a className="flex justify-center items-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full border-2 border-white hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
        </div>)
      },
      {
        Header: 'STATUS',
        accessor: 'package.status',
        Cell: ({ row }) => (
          <span
            className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span aria-hidden
              className={`absolute inset-0 ${row ? "bg-green-200" : "bg-red-200"}  opacity-50 rounded-full`}></span>
            <span class="relative">{row ? "Active" : "Inactive"}</span>
          </span>
        )
      },

    ], []);

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
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Deposit Users
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          {directMembers.length > 0 && <Tables columns={columns} data={directMembers.concat(indirectMembers)} color={color} />}
        </div>
      </div>
    </>
  )

}

export default Team;
