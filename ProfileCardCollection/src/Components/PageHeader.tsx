type pageHeaderProps = {
  title: string;
  description: string;
};

const PageHeader = ({ title, description }: pageHeaderProps) => {
  return (
    <div>
      <header className="mb-10 text-center">
        <h1 className="font-bold text-4xl text-gray-900 tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{description}</p>
      </header>
    </div>
  );
};

export default PageHeader;
