import React, { useMemo, useState } from 'react'
import { BsPersonLinesFill } from 'react-icons/bs';
import { FaMarsDouble } from 'react-icons/fa';
import { IoIosWallet } from 'react-icons/io';
import { RiRefund2Line } from 'react-icons/ri';
import CardStats from '../../Components/CardStats.jsx';
import CardTable from '../../Components/CardTable.jsx';
import { useSelector, useDispatch } from 'react-redux';
import Tables from '../../Components/Tables.js';
import Table from '../../Components/Table.js';
import { useGetUserTeamQuery } from "../../store/api/usersApi";
import { setUserTeam, team } from '../../store/state/authSlice.js';
import Modal from '../../Components/Modal.js';
import myAvatar from "../../assets/myAvatar.png";

const Dashboard = () => {
  const { profile, directMembers, userTeam } = useSelector(state => state.auth);
  // console.log(profile, directMembers);
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState('');
  const [skip, setSkip] = useState(true);
  // const { data: team, isSuccess } = useGetUserTeamQuery(userId, {
  //   skip
  // });

  const dispatch = useDispatch();

  const handleUserTeam = (e, id) => {
    e.preventDefault();
    console.log(id);
    dispatch(team(id));
    // setSkip((prev) => !prev);
    // setUserId(id);
  }

  const columns = useMemo(
    () => [
      {
        Header: 'USER',
        accessor: 'user_name',
        Cell: ({ row }) => {

          return (<th className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-left flex items-center" onClick={(e) => handleUserTeam(e, row.original._id)}>
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
        Header: 'PACKAGE NAME',
        accessor: 'package.name',
        Cell: (row) => (
          <span style={{ "cursor": "pointer" }} onClick={() => console.log(row.row.values._id)}> {row.value}</span>
        )
      },
      {
        Header: 'PACKAGE PRICE',
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
            <span class="relative">{row ? "Active": "Inactive" }</span>
          </span>

        )
      },

    ], []);

  // if (isSuccess) {
  //   console.log(team);
  //   const teams = team.data.package.direct_members.concat(team.data.package.indirect_members);
  //   dispatch(setUserTeam(teams));
  // }

  return (
    <>
      <div className="relative bg-blue-500 pb-32 pt-12 md:pt-32">
        <div className="mx-auto w-full px-4 md:px-10">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12 2xl:w-3/12">
                <CardStats
                  statSubtitle={profile.package?.name}
                  statTitle={profile.package?.price}
                  statArrow="up"
                  statPercent="3"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Every month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                  buttonText="Refund"
                  onClick={() => setShowModal(!showModal)}
                  icon={<RiRefund2Line className="text-5xl text-white" />}
                />
              </div>
              <div className="w-full px-4 lg:w-6/12 2xl:w-3/12">
                <CardStats
                  statSubtitle="ROI Wallet"
                  statTitle={profile.package?.money}
                  statArrow="down"
                  statPercent={Math.round((profile.package?.price / 30) * 10) / 10}
                  statPercentColor="text-red-500"
                  statDescripiron="Since last day"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                  buttonText="Withdraw"
                  icon={<IoIosWallet className="text-5xl" />}
                />
              </div>
              <div className="w-full px-4 lg:w-6/12 2xl:w-3/12">
                <CardStats
                  statSubtitle="Bussiness developer commission (referral commission)"
                  statTitle={profile.package?.commission_revenue}
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                  buttonText="Withdraw"
                  icon={<FaMarsDouble className="text-5xl" />}
                />
              </div>
              <div className="w-full px-4 lg:w-6/12 2xl:w-3/12">
                <CardStats
                  statSubtitle="Total teams members(direct + indirect)"
                  statTitle={profile.package?.direct_members.length + profile.package?.indirect_members.length}
                  // statPercent="12"
                  statPercentColor="text-emerald-500"
                  // statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-blue-500"
                  buttonText="Copy Code"
                  icon={<BsPersonLinesFill className="text-5xl" />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-m-24 mx-auto w-full px-4 md:px-10">
        <div className="flex flex-wrap mt-4">
          <div className={`{${(directMembers.length > 0) ? 'w-full' : 'w-full xl:w-8/12'}} mb-12 xl:mb-0 px-4`}>
            {/* <Table columns={columns} data={directMembers} color='light' /> */}
            {directMembers.length > 0 && <CardTable columns={columns} data={directMembers} color='light' heading="Direct Members" route="/dashboard/team" />}
          </div>
          <div className="w-full xl:w-4/12 px-4">
            {userTeam.length > 0 && <CardTable columns={columns} data={userTeam} color='light' heading="User Team" route="/dashboard/team" />}
            {/* <CardTable /> */}
          </div>
        </div>
      </div>
      <Modal open={showModal} setOpen={setShowModal} />
    </>
  )
}

export default Dashboard;