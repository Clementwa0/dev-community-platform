import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

const EventCard = ({ title, image, slug, location, date, time }: Props) => {
  return (
    <Link href={`/events/${slug}`} id="card" >
      <Image src={image} alt={title} width={410} height={300} className="h-[300px] w-full rounded-lg object-cover" />
         <div className="flex flex-row gap-2">
        <Image
          src="/icons/pin.svg"
          alt="location"
          width={14}
          height={14}
        />
        <p className="location text-light-200">{location}</p>
      </div>
      <p className="text-[20px] font-semibold line-clamp-1">{title}</p>

      <div className="text-light-200 flex flex-row flex-wrap items-center gap-4">
        <div>
          <Image
            src="/icons/calendar.svg"
            alt="calendar"
            width={14}
            height={14}
          />
          <p className="text-light-200">{date}</p>
        </div>
        <div>
          <Image src="/icons/clock.svg" alt="clock" width={14} height={14} />
          <p className="text-light-200">{time}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
