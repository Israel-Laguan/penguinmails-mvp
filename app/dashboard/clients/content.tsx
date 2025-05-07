'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ColumnFiltersState,
  SortingState,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table"
import { createColumns } from '../../../components/clients/columns'
import { Client } from '@/app/api/generated/prisma'
import { getClientsPage } from './actions'
import { ClientsHeader } from '@/components/clients/clients-header';
import { ClientsTable } from '@/components/clients/clients-table';
import { ClientsFilters } from '@/components/clients/clients-filters';
import { ClientsPagination } from '@/components/clients/clients-pagination';
import { RemoveClientDialog } from '@/components/clients/remove-client-dialog';

type ClientsContentProps = {
  initialClients: Client[];
  totalPages: number;
  campaignId: string;
  initialPage: number;
};

export default function ClientsContent({
  initialClients,
  campaignId,
  totalPages,
  initialPage,
}: ClientsContentProps) {
  const router = useRouter();
  const [clients, setClients] = useState(initialClients);
  const [showPII, setShowPII] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);

  const maskPII = (text: string) => showPII ? text : '•'.repeat(text?.length || 0);

  const columns = createColumns(
    maskPII,
    (client) => router.push(`/dashboard/clients/${client.id}/edit?campaignId=${campaignId}`),
    (client) => {
      setSelectedClient(client);
      setIsModalOpen(true);
    }
  )

  const table = useReactTable({
    data: clients,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    manualPagination: true,
    pageCount: totalPages,
    state: {
      sorting,
      columnFilters,
      pagination: {
        pageIndex: currentPage - 1,
        pageSize: 10,
      },
    },
  })

  const handlePageChange = async (newPage: number) => {
    setLoading(true);
    try {
      const data = await getClientsPage(campaignId, newPage);
      table.setPageSize(10);
      setClients(data.clients);
      setCurrentPage(newPage);
      router.push(`/dashboard/clients?campaignId=${campaignId}&page=${newPage}`);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveClient = async () => {
    if (!selectedClient) return;
    
    await fetch(`/api/campaigns/${campaignId}/clients`, {
      method: 'DELETE',
      body: JSON.stringify({ clientId: selectedClient.id }),
    });
    
    setIsModalOpen(false);
    router.refresh();
  };

  return (
    <div className="w-full">
      <ClientsHeader
        showPII={showPII}
        onTogglePII={() => setShowPII(!showPII)}
        campaignId={campaignId}
      />
      
      <ClientsFilters table={table} />
      
      <ClientsTable table={table} columns={columns} />

      <ClientsPagination
        currentPage={currentPage}
        totalPages={totalPages}
        loading={loading}
        onPageChange={handlePageChange}
      />

      <RemoveClientDialog
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        client={selectedClient}
        onConfirm={handleRemoveClient}
      />
    </div>
  );
}
