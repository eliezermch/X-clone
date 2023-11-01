import { Button } from '@nextui-org/react';
import { AuthButtonServer } from '@/components/auth-button-server';

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

function NavMenu() {
  return (
    <div className="flex flex-col gap-4 items-start">
      <AuthButtonServer />
      <Button className="bg-black" startContent={<IconAlienFilled />}>
        X Clone By Eliezer
      </Button>
      <Button className="bg-black hover:bg-zinc-900" startContent={<IconHome />}>
        Home
      </Button>
      <Button className="bg-black hover:bg-zinc-900" startContent={<IconSearch />}>
        Explore
      </Button>
      <Button className="bg-black hover:bg-zinc-900" startContent={<IconBell />}>
        Notifications
      </Button>
      <Button className="bg-black hover:bg-zinc-900" startContent={<IconMail />}>
        Messagges
      </Button>
      <Button className="bg-black hover:bg-zinc-900" startContent={<IconNotes />}>
        Lists
      </Button>
      <Button className="bg-black hover:bg-zinc-900" startContent={<IconBookmark />}>
        Saved
      </Button>
      <Button className="bg-black hover:bg-zinc-900" startContent={<IconUsers />}>
        Communities
      </Button>
      <Button className="bg-black hover:bg-zinc-900" startContent={<IconVip />}>
        Premium
      </Button>
      <Button className="bg-black hover:bg-zinc-900" startContent={<IconUser />}>
        Profile
      </Button>
      <Button className="bg-black hover:bg-zinc-900" startContent={<IconDotsCircleHorizontal />}>
        More options
      </Button>
    </div>
  );
}

export default NavMenu;
