import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import styles from './Table.module.css'
import { TableProps } from './Table.props';
import { Button } from '../button/Button';

export default function Table({columns, rows}: TableProps) {
  return (
    <div className={styles.tableWrapper}>
      <Button apearance='filled' className={styles.addBtn}>Добавить акцию</Button>
      <DataGrid
        rows={rows}
        columns={columns}
        // pageSizeOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
