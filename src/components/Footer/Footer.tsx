import Text from "@/components/design/Text";
import contactDetails from "@/data/contactDetails";
import { socialMediaUrl } from "@/data/info";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const { email, phone } = contactDetails;
  const { linkedin, github, twitter } = socialMediaUrl;
  return (
    <footer className="w-full mx-auto py-10 bg-footer dark:bg-gray-300 ">
      <div className="container max-width flex flex-col sm:flex-row sm:justify-between gap-4 ">
        <div>
          <Text color="gradient">Legal te ver aqui!</Text>
          <Text size="sm" color="contrast" className="mt-4">
            <a href={`mailto:${email}`}>{email}</a>
          </Text>
          <Text size="sm" color="contrast">
            Made © 2024 Henrique Souza
          </Text>
        </div>
        <div className="flex gap-6 items-end">
          <a href={linkedin} target="_blank" rel="noreferrer noopener">
            <FaLinkedin className="dark:fill-dark-heading fill-light-heading text-xl" />
          </a>
          <a href={github} target="_blank" rel="noreferrer noopener">
            <FaGithub className="dark:fill-dark-heading fill-light-heading text-xl" />
          </a>
          <a href={twitter} target="_blank" rel="noreferrer noopener">
            <FaXTwitter className="dark:fill-dark-heading fill-light-heading text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}
