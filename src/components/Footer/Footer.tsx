export default function Footer() {
  return (
    <footer className="w-full mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        Coded by{" "}
        <a
          className="font-medium"
          href={process.env.URL}
          target="_blank"
          rel="noreferrer noopener"
        >
          Henrique Souza
        </a>
      </p>
    </footer>
  );
}
