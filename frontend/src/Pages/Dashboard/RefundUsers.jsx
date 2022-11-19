import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Tables from '../../Components/Tables'
import { useGetAllUsersQuery, useGetDepositUsersQuery, useGetRefundUsersQuery, useRefundActionMutation } from '../../store/api/adminApi';
import { refundAction, refundUser } from '../../store/state/adminSlice';

function RefundUsers({ userId, color = 'light' }) {
  const { refundUsers, loading } = useSelector(state => state.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refundUser());
  }, []);
  // const { data, isLoading, isError, error, isSuccess } = useGetRefundUsersQuery();
  // const [depositAction] = useRefundActionMutation(); 
  const handleAction = async (e, id) => {
    e.preventDefault();
    const data = await dispatch(refundAction({ transaction_id: id }))
    if (data.meta.requestStatus === "fulfilled") {
      dispatch(refundUser());
    }
  }
  const columns = useMemo(
    () => [
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
                Refund Users
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          {!loading && <Tables columns={columns} data={refundUsers} color={color} />}
        </div>
      </div>
    </>
  )

}

export default RefundUsers;
