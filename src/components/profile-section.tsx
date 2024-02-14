import { Image } from '@nextui-org/react';
import { User } from '@/types/user';
import ProfileUserAvatar from './profile-user-avatar';
import ProfileTopSection from './profile-top-section';
import { getRandomHexColor } from '@/utils/functions';

interface Props {
  userData: User;
}

const ProfileSection = ({ userData }: Props) => {
  return (
    <section className="min-w-[140px] max-w-[540px] w-full min-h-screen mr-4 lg:ml-2 lg:mr-10 border-b border-l border-r border-white/20">
      <ProfileTopSection userData={userData} />
      <div className="mt-14">
        <div>
          <Image
            className="object-cover rounded-none"
            width={540}
            height={200}
            alt={`Poster Profile ${userData.name} Image`}
            src={`https://images.placeholders.dev/?text=${userData.name
              .charAt(0)
              .toLocaleUpperCase()}&width=540&height=200&bgColor=${getRandomHexColor()}`}
          />
        </div>
        <ProfileUserAvatar userData={userData} />
      </div>
    </section>
  );
};

export default ProfileSection;
