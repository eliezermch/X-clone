import CardCoverImage from '@/components/card-cover-image';
import CardImage from '@/components/card-image';

const NewsSection = () => {
  return (
    <section className="sticky top-0 min-w-[100px] max-w-[310px] w-full min-h-screen flex-col gap-5 right-0 items-center self-start pt-4 mr-6 hidden sm:flex">
      <CardCoverImage />
      <CardImage />
    </section>
  );
};

export default NewsSection;
