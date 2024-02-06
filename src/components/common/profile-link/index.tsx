import Link from "next/link";

type ProfileLinkProps = {
  href: string;
  label: string;
};
const ProfileLink: React.FC<ProfileLinkProps> = ({ href, label }) => {
  return (
    <Link href={href} className="text-cyan-500 font-semibold">
      {label}
    </Link>
  );
};

export default ProfileLink;
