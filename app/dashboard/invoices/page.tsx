import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/app/lib/data';

export default async function page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: number;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = searchParams?.page || 1;

  const totalPages = await fetchInvoicesPages(query);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className}`}>Invoices</h1>
      </div>
      {/* <h1>Biggest invoices</h1>
      <div className="flex flex-row items-center">
        {biggestInvoice?.map((invoice) => (
          <div
            key={invoice.id}
            className="flex-cols mr-5 flex-col items-center border border-gray-900 p-6 "
          >
            <div className="mr-2 text-lg">{invoice.name}</div>
            <div className="text-md mr-3">Amount: {invoice.amount}</div>
            <div className="text-green-500">Status: {invoice.status}</div>
          </div>
        ))}
      </div> */}
      <div className="flex-center mt-4 flex justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices" />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
