import { Card, CardHeader, Image } from '@nextui-org/react';
import React from 'react';

function CardCoverImage() {
  return (
    <div className="max-w-[900px] gap-2 grid px-8">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
          <h4 className="text-white font-medium text-large">Jude Bellingham won the clasic!</h4>
        </CardHeader>
        <Image removeWrapper alt="Card background" className="z-0 w-full h-full object-cover" src="/GOAL-jude.webp" />
      </Card>
    </div>
  );
}

export default CardCoverImage;
