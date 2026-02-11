import EventCard from "@/components/pages/EventCard";
import { Button } from "@/components/ui/button";
import events from "@/lib/constants";
import Image from "next/image";



const Page = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* Hero */}
      <h1 className="text-center text-4xl font-bold">The Hub for Every Dev</h1>

      <p className="text-center mt-5 text-muted-foreground max-w-xl mx-auto">
        Welcome to the developer&apos;s hub where all things related to
        development are gathered.
      </p>

      <div className="flex justify-center mt-6">
        <Button
          variant="outline"
          className="flex items-center gap-2 hover:bg-teal-900 hover:text-white"
        >
          <Image
            src="/icons/arrow-down.svg"
            alt="arrow down"
            width={20}
            height={20}
          />
          Explore More
        </Button>
      </div>

      <div className="mt-20 space-y-7">
        <h3> Featured Events</h3>

        <ul className="events list-none">
          {events.map((event) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;
