'use client';

import { deletePost } from '@/app/actions/delete-post-action';
import { IconTrash } from '@tabler/icons-react';
import React from 'react';

function DeleteButton({ id }: { id: string }) {
  // const handleDelete = async (id: string) => {
  //     await deletePost(id);
  //   };

  return (
    <div>
      <button className="hover:bg-red/40" onClick={() => deletePost(id)}>
        <IconTrash className="w-4 h-4 hover:color-red" />
      </button>
    </div>
  );
}

export default DeleteButton;
