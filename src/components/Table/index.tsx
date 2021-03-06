import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Text } from 'components'
import { Box, Flexbox } from '@zapalniczki/shared-components'

import { useTranslation } from 'hooks'
import React from 'react'
import { Column, useTable } from 'react-table'
import styled from 'styled-components'
import { SpaceProps } from 'styled-system'
import { getColor, getSpace } from 'styles'

type DataConstraint = Record<
  string,
  string | number | boolean | undefined | JSX.Element | null
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
  const { t: commonT } = useTranslation('COMMON')
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
          {!rows.length && (
            <tr>
              <td colSpan={headerGroups[0].headers.length}>
                <Flexbox
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                  paddingY="xxxl-size"
                  width="100%"
                >
                  <FontAwesomeIcon icon="search" size="2x" />

                  <Text marginTop="m-size" type="body-1">
                    {commonT('tableEmpty')}
                  </Text>
                </Flexbox>
              </td>
            </tr>
          )}

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
    border-color: ${getColor('gray-medium')};
    width: 100%;

    th {
      text-align: left;
      background: ${getColor('gray-light')};
    }

    th,
    td {
      margin: 0;
      padding: ${getSpace('m-size')};
    }
  }
`

export default Table
