'use client';

import { Avatar } from '@nextui-org/react';
import ComposePostTextArea from './compose-post-textarea';
import { addPost } from '@/app/actions/add-post-action';
import { useRef } from 'react';

interface Props {
  userAvatarUrl: string;
}

function ComposePost({ userAvatarUrl }: Props) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await addPost(formData);
        formRef.current?.reset();
      }}
      className="flex flex-row p-3 border-b border-white/20"
    >
      <Avatar className="mr-4" isBordered radius="full" size="md" src={userAvatarUrl} />
      <div className="flex flex-1 flex-col gap-y-4">
        <ComposePostTextArea />
        <button type="submit" className="bg-sky-300 text-sm font-bold rounded-full px-5 py-2 self-end">
          Post
        </button>
      </div>
    </form>
  );
}

export default ComposePost;
