import { Card, CardHeader, Image } from '@nextui-org/react';
import { fetchNewsData } from '@/app/actions/fetch-news-data';

async function CardCoverImage() {
  const { data }: any = await fetchNewsData();

  return (
    <div className="max-w-[900px] gap-2 grid">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-20 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Latest news</p>
          <h4 className="text-white font-medium text-large">{data.articles[0].title}</h4>
        </CardHeader>
        <div className="absolute z-10 w-full h-full bg-black/40"></div>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={data.articles[0].urlToImage}
        />
      </Card>
    </div>
  );
}

export default CardCoverImage;
