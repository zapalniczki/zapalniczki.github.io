import { Box } from 'components'
import React from 'react'
import { Column, useTable } from 'react-table'
import styled from 'styled-components'
import { SpaceProps } from 'styled-system'
import getColor from 'styles/getColor'
import getSpace from 'styles/getSpace'

type DataConstraint = Record<
  string,
  string | number | boolean | undefined | JSX.Element
>

type Props<D extends DataConstraint> = {
  columns: Column<D>[]
  data: D[]
  temp?: boolean
} & SpaceProps

function Table<T extends DataConstraint>({
  columns,
  data,
  ...props
}: Props<T>) {
  const { getTableBodyProps, getTableProps, headerGroups, prepareRow, rows } =
    useTable({
      columns,
      data
    })

  return (
    <Container {...props}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, headerGroupIndex) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroupIndex}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} key={column.id}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row, rowIndex) => {
            prepareRow(row)

            return (
              <tr {...row.getRowProps()} key={rowIndex}>
                {row.cells.map((cell, cellIndex) => (
                  <td {...cell.getCellProps()} key={cellIndex}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </Container>
  )
}

const Container = styled(Box)`
  width: 100%;
  overflow-x: auto;

  table {
    border: 1px solid;
    border-color: ${getColor('border-color')};
    width: 100%;

    th {
      text-align: left;
      background: ${getColor('background-color-01')};
    }

    th,
    td {
      margin: 0;
      padding: ${getSpace('m-size')};
    }
  }
`

export default Table
