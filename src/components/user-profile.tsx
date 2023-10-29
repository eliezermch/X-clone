import { User } from '@nextui-org/react';
import { Post } from '@/types/posts';

interface Props {
  userAvatarUrl: string;
  userName: string;
  userFullName: string;
}

export default function UserProfile({ userAvatarUrl, userName, userFullName }: Props) {
  return (
    <User
      className="flex self-end mr-10"
      name={userFullName}
      description={userName}
      avatarProps={{
        src: userAvatarUrl,
      }}
    />
  );
}
