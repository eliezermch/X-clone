import { fetchUserPostsByUsername } from '@/app/actions/fetch-user-posts-by-username';
import { User } from '@/types/user';
import { Avatar } from '@nextui-org/react';
import { IconCalendarMonth } from '@tabler/icons-react';
import PostsList from './posts-list';

interface Props {
  userData: User;
}

const ProfileUserAvatar = async ({ userData }: Props) => {
  const userPosts = await fetchUserPostsByUsername(userData.id);
  const date = new Date(userData.created_at);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'Octuber',
    'November',
    'December',
  ];
  return (
    <div className="relative bottom-[70px] mx-4">
      <Avatar src={userData.avatar_url} isBordered className="w-[140px] h-[140px] text-large" />
      <div className="mt-5 pb-2 border-b-[0.5px] border-gray-500">
        <h4 className="text-xl font-bol">{userData.name}</h4>
        <span className="text-gray-500">{`@${userData.user_name}`}</span>

        <div className="flex items-center gap-2 mt-2">
          <IconCalendarMonth className="" color="#6b7280" width={20} height={20} />
          <span className="text-gray-500">{`Joined ${months[date.getMonth()]} ${date.getFullYear()}`} </span>
        </div>
      </div>

      <PostsList posts={userPosts} />
    </div>
  );
};

export default ProfileUserAvatar;
