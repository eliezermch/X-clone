'use client';

import { deletePost } from '@/app/actions/delete-post-action';
import { IconTrash } from '@tabler/icons-react';
import React from 'react';

function DeleteButton({ id, user }: { id: string; user: any }) {
  return (
    <div>
      <button className="hover:bg-red/40" onClick={() => deletePost(id, user)}>
        <IconTrash className="w-4 h-4 hover:text-rose-700" />
      </button>
    </div>
  );
}

export default DeleteButton;
