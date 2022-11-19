import React, { useState } from 'react';
import { useAsyncDebounce, useFilters, useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table';

const Tables = ({ columns, data, color }) => {

  const { getTableProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize }, } = useTable({
      columns,
      data,
      initialState: { pageIndex: 0 }
    }, useFilters, useGlobalFilter, useSortBy, usePagination)

  return (
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <div class="flex justify-end mr-8 items-center py-4 bg-white dark:bg-gray-800">
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />

      </div>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          {headerGroups.map(headerGroup => (
            <tr  {...headerGroup.getHeaderGroupProps()}>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label for="checkbox-all-search" class="sr-only">checkbox</label>
                </div>
              </th>
              {headerGroup.headers.map(column => (
                <th scope="col" class="py-3 px-6" {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {column.isSorted ? column.isSortedDesc ? ' ▼' : " ▲" : ''}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" {...row.getRowProps()}>
                <td class="p-4 w-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                {row.cells.map(cell => {
                  return (
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"  {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}

        </tbody>
      </table>


      <div class="flex flex justify-around items-center">
        <div class="flex mt-2 xs:mt-0">
          <span class="text-sm text-gray-700 dark:text-gray-400">
            Showing
            <span class="font-semibold text-gray-900 dark:text-white">
              1
            </span> to <span class="font-semibold text-gray-900 dark:text-white">
              10
            </span> of <span class="font-semibold text-gray-900 dark:text-white">
              100
            </span>
            Entries
          </span>

          <select id="small" class="block p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
          
        </div>
        <div class="inline-flex mt-2 xs:mt-0">
          <nav aria-label="Page navigation example">
            <ul class="inline-flex -space-x-px">
              <li>
                <button href="#" class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
              </li>
              {page.map((_, i) => (
                <li>
                  <button href="#" class={pageCount === i ? "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" : "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"} onChange={e => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0
                    console.log(page)
                    gotoPage(page)
                  }}>{i +1}</button>
                </li>
              ))}

              <li>
                <button href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>



      <div id="editUserModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center p-4 w-full md:inset-0 h-modal md:h-full">
        <div class="relative w-full max-w-2xl h-full md:h-auto">

          <form action="#" class="relative bg-white rounded-lg shadow dark:bg-gray-700">

            <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Edit user
              </h3>
              <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="editUserModal">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </div>

            <div class="p-6 space-y-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                  <input type="text" name="first-name" id="first-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie" required="" />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                  <input type="text" name="last-name" id="last-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Green" required="" />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input type="email" name="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@company.com" required="" />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                  <input type="number" name="phone-number" id="phone-number" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. +(12)3456 789" required="" />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label for="department" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
                  <input type="text" name="department" id="department" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Development" required="" />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                  <input type="number" name="company" id="company" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123456" required="" />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label for="current-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Password</label>
                  <input type="password" name="current-password" id="current-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required="" />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label for="new-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                  <input type="password" name="new-password" id="new-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required="" />
                </div>
              </div>
            </div>

            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save all</button>
            </div>
          </form>
        </div>
      </div>
    </div>


  )
}

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <div className="relative">
      <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
        <i className="fas fa-search"></i>
      </span>
      <input
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        type="text"
        placeholder="Search here..."
        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
      />
    </div>
  )
}
// <div class="relative">
//   <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
//     <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
//   </div>
//   <input
//     value={value || ""}
//     onChange={e => {
//       setValue(e.target.value);
//       onChange(e.target.value);
//     }}
//     placeholder={`${count} records...`}
//     type="text" id="table-search-users" class="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
// </div>
{/* <span>
  Search:{' '}
  <input
    value={value || ""}
    onChange={e => {
      setValue(e.target.value);
      onChange(e.target.value);
    }}
    placeholder={`${count} records...`}
    style={{
      fontSize: '1.1rem',
      border: '0',
    }}
  />
</span> */}

export default Tables;


{/* <>
  <div className='mb-4'>
    <GlobalFilter
      preGlobalFilteredRows={preGlobalFilteredRows}
      globalFilter={state.globalFilter}
      setGlobalFilter={setGlobalFilter}
    />
  </div>
  <table className="items-center w-full bg-transparent border-collapse"  {...getTableProps()}>
    <thead>
      {headerGroups.map(headerGroup => (
        <tr  {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th className={
              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
              (color === "light"
                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
            } {...column.getHeaderProps(column.getSortByToggleProps())}>
              {column.render('Header')}
              {column.isSorted ? column.isSortedDesc ? ' ▼' : " ▲" : ''}
            </th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody>
      {page.map((row, i) => {
        prepareRow(row)
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => {
              return (
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"  {...cell.getCellProps()}>
                  {cell.render('Cell')}
                </td>
              )
            })}
          </tr>
        )
      })}
    </tbody>
  </table>
  <div className="pagination row">
    <span className='mr-auto col-md-6'>
      <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        {'<<'}
      </button>{' '}
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        {'<'}
      </button>{' '}
      <button onClick={() => nextPage()} disabled={!canNextPage}>
        {'>'}
      </button>{' '}
      <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        {'>>'}
      </button>{' '}
      <span>
        Page{' '}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{' '}
      </span>
    </span>
    <span className='col-md-6 mt-4'>
      <span>
        Go to page:{' '}
        <input
          type="number"
          defaultValue={pageIndex + 1}
          onChange={e => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0
            gotoPage(page)
          }}
          style={{ width: '100px' }}
        />
      </span>{' '}
      <select
        value={pageSize}
        onChange={e => {
          setPageSize(Number(e.target.value))
        }}
      >
        {[10, 20, 30, 40, 50].map(pageSize => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </span>
  </div>
</> */}