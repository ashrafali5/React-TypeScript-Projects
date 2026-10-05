import Avatar from "./Avatar";
import SocialLink from "./SocialLink";

export type profile = {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  github: string;
  linkedin: string;
  available: boolean;
};

type profileCardProps = {
  profile: profile;
};

const ProfileCard = ({ profile }: profileCardProps) => {
  return (
    <div>
      <article className="w-full group rounded-2xl bg-white p-6 text-center shadow-sm border border-gray-200 transition duration-500 hover:-translate-y-5 hover:shadow-2xl ">
        <Avatar src={profile.image} alt={`${profile.name}'s profile picture`} />

        <h1 className="text-2xl font-bold">{profile.name}</h1>

        <p className="mt-2 text-gray-500">{profile.role}</p>

        <p className="mt-4 text-gray-600">{profile.bio}</p>

        {/* Availability */}
        <div className="mt-5">
          {profile.available ? (
            <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-2 text-xs font-semibold text-green-700">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Available for work
            </span>
          ) : (
            <span className="rounded-full bg-gray-100 px-3 py-2 text-xs font-medium text-gray-500">
              Currently busy
            </span>
          )}
        </div>

        {/* Social Buttons */}
        <div className="mt-6 flex justify-center gap-3">
          <SocialLink href={profile.github} label="GitHub" />
          <SocialLink href={profile.linkedin} label="LinkedIn" />
        </div>
      </article>
    </div>
  );
};

export default ProfileCard;
