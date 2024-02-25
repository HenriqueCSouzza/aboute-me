import Text from "@/components/design/Text";
import contactDetails from "@/data/contactDetails";
import { socialMediaUrl } from "@/data/info";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const { email, phone } = contactDetails;
  const { linkedin, github, twitter } = socialMediaUrl;
  return (
    <footer className="w-full mx-auto py-10 bg-footer dark:bg-gray-300">
      <div className="container max-width flex xs:flex-row justify-between gap-4">
        <div>
          <Text color="contrast" className="font-bold">
            Como me encontrar!
          </Text>
          <div className="flex gap-6 items-end mt-4">
            <a
              href={`mailto:${email}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <MdEmail className="dark:fill-dark-heading fill-light-heading text-xl cursor-pointer" />
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer noopener">
              <FaLinkedin className="dark:fill-dark-heading fill-light-heading text-xl cursor-pointer" />
            </a>
            <a href={github} target="_blank" rel="noreferrer noopener">
              <FaGithub className="dark:fill-dark-heading fill-light-heading text-xl cursor-pointer" />
            </a>
            <a href={twitter} target="_blank" rel="noreferrer noopener">
              <FaXTwitter className="dark:fill-dark-heading fill-light-heading text-xl cursor-pointer" />
            </a>
          </div>
        </div>
        <div className="flex justify-end items-end">
          <Text size="sm" color="contrast">
            Made © 2024 Henrique Souza
          </Text>
        </div>
      </div>
    </footer>
  );
}
