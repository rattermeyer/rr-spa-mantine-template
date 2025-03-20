import {Button, Flex} from "@mantine/core";
import {
    MantineReactTable,
    type MRT_ColumnDef,
    type MRT_TableInstance,
    useMantineReactTable,
} from "mantine-react-table";
import {useEffect, useMemo, useState} from "react";
import {Link, NavLink} from "react-router";
import {RemixFormProvider, useRemixForm} from "remix-hook-form";
import {RowActions} from "~/components/row-actions/row-actions";
import {CustomerForm} from "~/modules/customer/ui/customer-form";
import type {Customer} from "~/shared/domain/customer.model";

export function CustomerListPage(props: { customers: Customer[] }) {
    const {customers} = props;
    const [data, setData] = useState<Customer[]>([]);

    useEffect(() => {
        setData(customers);
    }, [customers]);
    const columns = useMemo<MRT_ColumnDef<Customer>[]>(
        () => [
            {
                accessorKey: "firstName",
                header: "First Name",
            },
            {
                accessorKey: "lastName",
                header: "Last Name",
            },
            {
                accessorKey: "company",
                header: "Company",
            },
            {
                accessorKey: "address",
                header: "Address",
            },
            {
                accessorKey: "country",
                header: "Country",
            },
        ],
        [],
    );

    const table = useMantineReactTable<Customer>({
        columns,
        data,
        getRowId: (row) => String(row.customerId),
        enableRowActions: true,
        enableGrouping: true,
        renderRowActions: (row) => (
            <RowActions
                urlPrefix={"/customers"}
                id={row.row.id}
                keyDisplay={row.row.original.firstName ?? ""}
            />
        ),
        renderTopToolbarCustomActions: ({table}) => (
            <Flex gap="md">
                <Button size="xs" color="blue" component={NavLink} to="/customers/new">
                    New Customer
                </Button>
                <Button
                    size="xs"
                    color="blue"
                    component={Link}
                    reloadDocument={true}
                    to="/customers/export"
                >
                    CSV (server)
                </Button>
                <Button
                    size="xs"
                    color="blue"
                    component={Link}
                    reloadDocument={true}
                    to="/customers/export?format=xlsx"
                >
                    XLSX (server)
                </Button>
            </Flex>
        ),
        renderDetailPanel: (row) => {
            const customerRow = row.row.original;
            const form = useRemixForm<Customer>({
                defaultValues: customerRow,
                mode: "onSubmit",
                reValidateMode: "onBlur",
            });
            return (
                <RemixFormProvider {...form}>
                    <CustomerForm editable={false}/>
                </RemixFormProvider>
            );
        },
    });
    return <MantineReactTable table={table}/>;
}
