'use server';

import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

export const deletePost = async (id: string, user: any) => {
  try {
    if (!id || !user) return;

    const supabase = createServerActionClient({ cookies });

    await supabase.from('posts').delete().eq('id', id).eq('user_id', user.id);

    revalidatePath('/');
  } catch (error) {
    console.error('Error deleting post:', error);
  }
};
