import { GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TableProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    columns: GridColDef[]
    rows: GridRowsProp
}