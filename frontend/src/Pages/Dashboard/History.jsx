import React, { useMemo } from 'react'
import Tables from '../../Components/Tables'
import { useGetHistroyQuery } from '../../store/api/usersApi';

function History({ userId, color = 'light' }) {
  const { data, isLoading, isError, error, isSuccess } = useGetHistroyQuery();
  const columns = useMemo(
    () => [

      {
        Header: 'Transaction ID',
        accessor: '_id'
      },
      {
        Header: 'Transaction Type',
        accessor: 'type'
      },
      {
        Header: 'MONEY',
        accessor: 'money',
      },
      {
        Header: 'STATUS',
        accessor: 'package.status',
        Cell: ({ row }) => (
          <button  className="bg-custom-secondary text-black mt-5 w-full cursor-pointer rounded-md py-2 font-semibold  sm:mt-10 md:mt-8 md:py-3">
            Action
          </button>
        )
      },
    ], []);
  if (isSuccess) {
    console.log(data, isLoading, isError, error, isSuccess);
  }

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
          {isSuccess && <Tables columns={columns} data={data.data} color={color} />}
        </div>
      </div>
    </>
  )

}

export default History;
