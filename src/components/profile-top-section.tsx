import { User } from '@/types/user';
import { IconArrowLeft } from '@tabler/icons-react';
import Link from 'next/link';

interface Props {
  userData: User;
}

const ProfileTopSection = ({ userData }: Props) => {
  return (
    <div className="h-14 flex items-center gap-6 px-4 fixed top-0 bg-black opacity-65 backdrop-blur-md">
      <div>
        <Link href={'/'}>
          <IconArrowLeft />
        </Link>
      </div>
      <div>
        <h4 className="text-xl">{userData.name}</h4>
      </div>
    </div>
  );
};

export default ProfileTopSection;
