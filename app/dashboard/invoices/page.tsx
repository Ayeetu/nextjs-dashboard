import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

export default function page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className}`}>Invoices</h1>
      </div>
      <div className="flex-center mt-4 flex justify-between gap-2 md:mt-8"></div>
      <div className="mt-5 flex w-full justify-center"></div>
    </div>
  );
}
