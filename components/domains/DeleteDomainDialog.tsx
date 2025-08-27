"use client";

import AlertDialogDelete from "../AlertDialogDelete";
function DeleteDomainDialog({ domainId }: { domainId: number }) {
  async function handleDelete() {
    console.log(`Deleting domain with ID: ${domainId}`);
  }

  return (
    <AlertDialogDelete
      title="Delete Domain"
      description="Are you sure you want to delete this domain? This action cannot be undone."
      onDelete={handleDelete}
    />
  );
}
export default DeleteDomainDialog;
