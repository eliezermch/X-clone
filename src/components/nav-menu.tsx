import { Avatar, Button, User } from '@nextui-org/react';

import {
  IconAlienFilled,
  IconBell,
  IconBookmark,
  IconDotsCircleHorizontal,
  IconHome,
  IconMail,
  IconNotes,
  IconSearch,
  IconUser,
  IconUsers,
  IconVip,
} from '@tabler/icons-react';
import { AuthButtonServer } from './auth-button-server';

interface Props {
  userAvatarUrl: string;
  userName: string;
  userFullName: string;
}

function NavMenu({ userAvatarUrl, userName, userFullName }: Props) {
  return (
    <nav className="flex flex-col gap-3 items-center lg:items-start">
      <Button
        className="bg-black"
        startContent={<IconAlienFilled className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]" />}
      >
        <p className="hidden lg:block">X Clone By Eliezer</p>
      </Button>
      <Button
        className="bg-black hover:bg-zinc-900"
        startContent={<IconHome className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]" />}
      >
        <p className="hidden lg:block">Home</p>
      </Button>
      <Button
        className="bg-black hover:bg-zinc-900"
        startContent={<IconSearch className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]" />}
      >
        <p className="hidden lg:block">Explore</p>
      </Button>
      <Button
        className="bg-black hover:bg-zinc-900"
        startContent={<IconBell className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]" />}
      >
        <p className="hidden lg:block">Notifications</p>
      </Button>
      <Button
        className="bg-black hover:bg-zinc-900"
        startContent={<IconMail className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]" />}
      >
        <p className="hidden lg:block">Messagges</p>
      </Button>
      <Button
        className="bg-black hover:bg-zinc-900"
        startContent={<IconNotes className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]" />}
      >
        <p className="hidden lg:block">Lists</p>
      </Button>
      <Button
        className="bg-black hover:bg-zinc-900"
        startContent={<IconBookmark className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]" />}
      >
        <p className="hidden lg:block">Saved</p>
      </Button>
      <Button
        className="bg-black hover:bg-zinc-900"
        startContent={<IconUsers className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]" />}
      >
        <p className="hidden lg:block">Communities</p>
      </Button>
      <Button
        className="bg-black hover:bg-zinc-900"
        startContent={<IconVip className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]" />}
      >
        <p className="hidden lg:block">Premium</p>
      </Button>
      <Button
        className="bg-black hover:bg-zinc-900"
        startContent={<IconUser className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]" />}
      >
        <p className="hidden lg:block">Profile</p>
      </Button>
      <Button
        className="bg-black hover:bg-zinc-900"
        startContent={<IconDotsCircleHorizontal className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]" />}
      >
        <p className="hidden lg:block">More options</p>
      </Button>

      <User
        className="hidden lg:flex self-end mr-10 mt-4"
        name={userFullName}
        description={userName}
        avatarProps={{
          src: userAvatarUrl,
        }}
      />
      <Avatar className="block lg:hidden w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]" src={userAvatarUrl} />

      <AuthButtonServer />
    </nav>
  );
}

export default NavMenu;
