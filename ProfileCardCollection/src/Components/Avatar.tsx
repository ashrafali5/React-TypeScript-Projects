type AvatarProps = {
  src: string;
  alt: string;
};

const Avatar = ({ src, alt }: AvatarProps) => {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        className="mx-auto h-24 w-24 mb-2 rounded-full object-cover ring-4 ring-gray-200 transition duration-500 group-hover:ring-blue-300"
      />
    </div>
  );
};

export default Avatar;
