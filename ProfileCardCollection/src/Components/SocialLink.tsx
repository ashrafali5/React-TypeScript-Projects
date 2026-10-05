type SocialLinkProps = {
  href: string;
  label: string;
};
const SocialLink = ({ label, href }: SocialLinkProps) => {
  return (
    <div>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700"
      >
        {label}
      </a>
    </div>
  );
};

export default SocialLink;
