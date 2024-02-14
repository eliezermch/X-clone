import { User } from '@/types/user';
import { Avatar } from '@nextui-org/react';

interface Props {
  userData: User;
}

const ProfileUserAvatar = ({ userData }: Props) => {
  return (
    <div className="relative bottom-[70px] ml-4">
      <Avatar src={userData.avatar_url} isBordered className="w-[140px] h-[140px] text-large" />
    </div>
  );
};

export default ProfileUserAvatar;
