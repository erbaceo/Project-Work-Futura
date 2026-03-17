import React from 'react';
import OrderModal from './OrderModal';
import Alert from 'react-bootstrap/Alert';

import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender
} from '@tanstack/react-table';

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('id', {
    header: 'ID',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('cliente', {
    header: 'Cliente',
    cell: info => info.getValue() || '-',
  }),
  columnHelper.accessor('prodotto', {
    header: 'Prodotto',
    cell: info => info.getValue() || '-',
  }),
  columnHelper.accessor('quantita', {
    header: 'Quantità',
    cell: info => info.getValue() || '-',
  }),
  columnHelper.accessor('data_ordine', {
    header: 'Data',
    cell: info => info.getValue() || '-',
  })
];

function Tabella({ data = [], onOrderCreated }) {
    const [formStatus, setFormStatus] = React.useState([]);
    const [pagination, setPagination] = React.useState({
      pageIndex: 0,
      pageSize: 10,
    });

    const setFormAlert = (status) => {
        setFormStatus(status);
    };

    const table = useReactTable({
      data,
      columns,
            autoResetPageIndex: false,
      getPaginationRowModel: getPaginationRowModel(),
      onPaginationChange: setPagination,
      getCoreRowModel: getCoreRowModel(),
      state: {
        pagination,
      },
    });

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <OrderModal setFormAlert={setFormAlert} onOrderCreated={onOrderCreated} />
                {formStatus.length > 0 && (
                    <Alert
                        key={formStatus[1]}
                        variant={formStatus[1]} 
                        onClose={() => setFormStatus([])} 
                        dismissible
                        className="mb-0"
                    >
                        {formStatus[0]}
                    </Alert>
                )}
            </div>
            <table className="table table-striped table-bordered table-dark">
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="d-flex justify-content-between align-items-center mt-3">
                <div className="btn-group me-3" role="group" aria-label="Pagination Controls">
                    <button
                        className="btn btn-secondary"
                        onClick={() => table.setPageIndex(0)}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {'<<'}
                    </button>
                    <button
                        className="btn btn-secondary px-3"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {'<'}
                    </button>
                    <button
                        className="btn btn-secondary px-3"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        {'>'}
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                        disabled={!table.getCanNextPage()}
                    >
                        {'>>'}
                    </button>
                </div>
                <span className="d-none d-md-block">
                    {table.getState().pagination.pageIndex + 1} di{' '}
                    {table.getPageCount()}
                </span>
                <select 
                    className="form-select w-auto bg-secondary text-white border-0 ms-auto"
                    value={table.getState().pagination.pageSize}
                    onChange={(e) => {
                        table.setPageSize(Number(e.target.value))
                    }}
                    >
                        {[10, 20, 30, 40, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize} per pagina
                            </option>
                        ))}
                </select>
            </div>
        </div>
    )
}

export default Tabella;