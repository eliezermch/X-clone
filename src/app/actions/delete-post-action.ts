'use server';

import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

export const deletePost = async (id: string) => {
  'use server';

  if (id === null) return;

  const supabase = createServerActionClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user === null) return;

  await supabase.from('posts').delete().eq('id', id).eq('user_id', user.id);

  revalidatePath('/');
};
