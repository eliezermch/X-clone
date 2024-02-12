import { Session } from '@supabase/supabase-js';
import NavMenu from './nav-menu';

interface Props {
  session: Session;
}

const MenuSection = ({ session }: Props) => {
  return (
    <section className="sticky top-0 min-w-[70px] max-w-[275px] min-h-screen flex flex-col justify-between items-end self-start pt-3 pb-4 lg:w-full">
      <NavMenu
        userAvatarUrl={session.user.user_metadata.avatar_url}
        userName={session.user.user_metadata.name}
        userFullName={session.user.user_metadata.user_name}
      />
    </section>
  );
};

export default MenuSection;
