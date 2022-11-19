import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Tables from '../../Components/Tables'
import { useDepositActionMutation, useGetAllUsersQuery, useGetDepositUsersQuery } from '../../store/api/adminApi';
import { dispatchAction, dipositUser } from '../../store/state/adminSlice';

function DepositUsers({ userId, color = 'light' }) {
  const { depositUsers, loading } = useSelector(state => state.admin);
  const dispatch = useDispatch();
  // const { data, isLoading, isError, error, isSuccess } = useGetDepositUsersQuery();
  // const [depositAction] = useDepositActionMutation(); 
  useEffect(() => {
    dispatch(dipositUser());
  }, []);

  const handleAction = async (e, id) => {
    e.preventDefault();
    const data = await dispatch(dispatchAction({ transaction_id: id }))
    if (data.meta.requestStatus === "fulfilled") {
      dispatch(dipositUser());
    }
  }
  const columns = useMemo(
    () => [

      {
        Header: 'USER',
        accessor: 'image',
        Cell: ({ row }) => {
          return (<th className="border-t-0 align-middle border-l-0 border-r-0 text-xs text-left flex items-center" >
            <img
              src={row.original.image}
              className="h-12 w-12 bg-white rounded-full border"
              alt="..."
            ></img>
          </th>)

        }
      },
      {
        Header: 'ID',
        accessor: '_id'
      },
      {
        Header: 'MONEY',
        accessor: 'money',
      },
      {
        Header: 'STATUS',
        accessor: 'package.status',
        Cell: ({ row }) => (
          <button onClick={(e) => handleAction(e, row.original._id)} className="bg-custom-secondary text-black mt-5 w-full cursor-pointer rounded-md py-2 font-semibold  sm:mt-10 md:mt-8 md:py-3">
            Action
          </button>
        )
      },
    ], []);
  // if (isSuccess) {
  //   console.log(data, isLoading, isError, error, isSuccess);
  // }

  console.log('zzzzzzzz', depositUsers)
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
          {!loading && <Tables columns={columns} data={depositUsers} color={color} />}
        </div>
      </div>
    </>
  )

}

export default DepositUsers;
