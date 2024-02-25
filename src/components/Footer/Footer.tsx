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
      <div className="container max-width flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex flex-col  items-center sm:items-start">
          <Text color="contrast" className="font-bold">
            Como me encontrar!
          </Text>
          <div className="flex gap-6 mt-4">
            <a
              href={`mailto:${email}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <MdEmail className="dark:fill-dark-heading fill-light-heading text-3xl cursor-pointer" />
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer noopener">
              <FaLinkedin className="dark:fill-dark-heading fill-light-heading text-3xl cursor-pointer" />
            </a>
            <a href={github} target="_blank" rel="noreferrer noopener">
              <FaGithub className="dark:fill-dark-heading fill-light-heading text-3xl cursor-pointer" />
            </a>
            <a href={twitter} target="_blank" rel="noreferrer noopener">
              <FaXTwitter className="dark:fill-dark-heading fill-light-heading text-3xl cursor-pointer" />
            </a>
          </div>
        </div>
        <div className="flex justify-center sm:justify-end items-end text-center">
          <Text size="sm" color="contrast">
            © 2024 Henrique Souza
          </Text>
        </div>
      </div>
    </footer>
  );
}
