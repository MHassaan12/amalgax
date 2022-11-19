import React, { useState } from 'react';
import { useAsyncDebounce, useFilters, useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table';

const Table = ({ columns, data, color }) => {

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
    </div>


  )
}
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

export default Table;


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