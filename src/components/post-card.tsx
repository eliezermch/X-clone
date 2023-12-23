import { deletePost } from '@/app/actions/delete-post-action';
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from '@nextui-org/react';
import { IconMessageCircle, IconHeart, IconRepeat, IconTrash } from '@tabler/icons-react';

import Link from 'next/link';
import DeleteButton from './delete-button';

interface Props {
  userName: string;
  userFullname: string;
  avatarUrl: string;
  content: string;
  id: string;
}

export default function PostCard({ userName, userFullname, avatarUrl, content, id }: Props) {
  return (
    <Card className="cursor-pointer mt-4">
      <CardHeader className="justify-between">
        <div className="flex gap-x-3">
          <Link href={`/${userName}`}>
            <Avatar isBordered radius="full" size="md" src={avatarUrl} />
          </Link>

          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{userFullname}</h4>
            <h5 className="text-small tracking-tight text-default-400">{userName}</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-white">
        <p>{content}</p>
      </CardBody>
      <CardFooter className="gap-3">
        <button>
          <IconMessageCircle className="w-4 h-4" />
        </button>
        <button>
          <IconHeart className="w-4 h-4" />
        </button>
        <button>
          <IconRepeat className="w-4 h-4" />
        </button>
        <DeleteButton id={id} />
      </CardFooter>
    </Card>
  );
}
