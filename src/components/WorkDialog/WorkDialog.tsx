import workDetails from "@/data/workDetails";
import Dialog from "@/components/design/Dialog";
import Text from "@/components/design/Text";
import Title from "@/components/design/Title";
const WorkDialog = ({ id, lang }: { id?: number; lang: "en-US" | "pt-BR" }) => {
  const findWork = workDetails.find((work) => work.id === id);

  return (
    <div>
      <Dialog.Header>
        <Title tag="h3">{findWork?.Position[lang]}</Title>
      </Dialog.Header>
      <Dialog.Content>
        <Text color="contrast" className="font-semibold mb-4">
          {findWork?.Company}
        </Text>
        <Text color="contrast" className="font-semibold">
          {findWork?.Description[lang]}
        </Text>
      </Dialog.Content>
    </div>
  );
};

export default WorkDialog;
