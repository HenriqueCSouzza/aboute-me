"use client";

import workDetails from "@/data/workDetails";
import Dialog from "@/components/design/Dialog";
import withQSDialogFeatures from "@/queryString/hocs/withQSDialogFeatures";

const WorkDialog = (props: any) => {
  console.log("aqui");
  return (
    <Dialog.Root {...props}>
      <Dialog.Header>Header</Dialog.Header>
      <Dialog.Content>Content</Dialog.Content>
      <Dialog.Footer>Footer</Dialog.Footer>
    </Dialog.Root>
  );
};

export default withQSDialogFeatures(WorkDialog);
