import Title from "@/components/design/Title";
import { contactDetails } from "@/data/info";

export default function ContactPage() {
  const { email, phone } = contactDetails;

  return (
    <main className="container mx-auto max-width section text-center">
      <Title tag="h1">How to contact me</Title>
      <Title tag="h3" size="h4" color="gradient">
        <a href={`mailto:${email}`}>{email}</a>
      </Title>
      <span className="text-center text-content text-xl font-light block">
        or
      </span>
      <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-2 md:py-6">
        <a href={`tel:${phone}`}>{phone}</a>
      </h3>
    </main>
  );
}
