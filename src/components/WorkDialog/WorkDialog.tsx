import workDetails from "@/data/workDetails";
import Dialog from "@/components/design/Dialog";

const WorkDialog = ({ id, lang }: { id?: number; lang: "en-US" | "pt-BR" }) => {
  const findWork = workDetails.find((work) => work.id === id);

  return (
    <div>
      <Dialog.Header>
        <div>{findWork?.Position[lang]}</div>
      </Dialog.Header>
      <Dialog.Content>
        <div className="">empresa: {findWork?.Company}</div>
        <div>{findWork?.Description[lang]}</div>
      </Dialog.Content>
    </div>
  );
};

export default WorkDialog;
