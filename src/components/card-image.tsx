import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';

function CardImage() {
  return (
    <Card className="py-3">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Hip-Hop Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image alt="Card background" className="object-cover rounded-xl" src="/cat_with_lofi_vibes.png" width={270} />
      </CardBody>
    </Card>
  );
}

export default CardImage;
