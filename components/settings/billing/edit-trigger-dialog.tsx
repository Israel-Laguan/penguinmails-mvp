import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UpdateBillingAddressForm from "./update-billing-address-form";

function EditAddressTrigger({ title }: { title: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link">{title}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Billing Address</DialogTitle>
        </DialogHeader>
        <UpdateBillingAddressForm />
      </DialogContent>
    </Dialog>
  );
}
export default EditAddressTrigger;
