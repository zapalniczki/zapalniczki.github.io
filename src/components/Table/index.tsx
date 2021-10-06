import React from 'react'
import { Column, useTable } from 'react-table'
import styled from 'styled-components'

type DataConstraint = Record<
  string,
  string | number | boolean | undefined | JSX.Element
>

type Props<D extends DataConstraint> = {
  columns: Column<D>[],
  data: D[],
  temp?: boolean
}

function Table<T extends DataConstraint>({ columns, data }: Props<T>) {
  const { getTableBodyProps, getTableProps, headerGroups, prepareRow, rows } =
    useTable({
      columns,
      data
    })

  return (
    <Container>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} key={column.id}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)

            return (
              <tr {...row.getRowProps()} key={i}>
                {row.cells.map((cell, index) => (
                    <td {...cell.getCellProps()} key={index}>
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

const Container = styled.div`
  width: 100%;

  table {
    border: 1px solid;
    border-color: ${(props) => props.theme.colors['border-color']};
    width: 100%;

    th {
      text-align: left;
      background: ${(props) => props.theme.colors['background-color-01']};
    }

    th,
    td {
      margin: 0;
      padding: ${(props) => props.theme.space['m-size']};
    }
  }
`

export default Table
