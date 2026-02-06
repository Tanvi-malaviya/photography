import Image from "next/image";


const stories = [
  {
    title: "A quiet wedding in Udaipur",
    category: "Wedding",
    read: "6 min read",
    image: "/abouthero.jpg",
    slug: "a-quiet-wedding-in-udaipur",
    content: {
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      section1:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",

      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      section2:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus.",

      ending:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    }
  },
  {
    title: "Why pauses matter in photographs",
    category: "Editorial",
    read: "4 min read",
    image: "/abouthero.jpg",
    slug: "why-pauses-matter-in-photographs",
    content: {
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",

      section1:
        "Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",

      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

      section2:
        "Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",

      ending:
        "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc."
    }
  },
  {
    title: "A rain-soaked celebration",
    category: "Wedding",
    read: "7 min read",
    image: "/abouthero.jpg",
    slug: "a-rain-soaked-celebration",
    content: {
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec ante. Sed lacinia, urna non tincidunt mattis.",

      section1:
        "Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique.",

      quote:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

      section2:
        "Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.",

      ending:
        "Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus."
    }
  },
  {
    title: "Portraits without posing",
    category: "Portrait",
    read: "3 min read",
    image: "/abouthero.jpg",
    slug: "portraits-without-posing",
    content: {
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam. In scelerisque sem at dolor.",

      section1:
        "Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.",

      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",

      section2:
        "Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.",

      ending:
        "Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh."
    }
  },
];

export default async function Page({ params }) {
  //  MUST await params
  const { slug } = await params;

  const story = stories.find((s) => s.slug === slug);

  if (!story) {
    return <div className="p-20">Story not found</div>;
  }

 return (
  <section className="bg-white">

    {/* HERO WRAPPER */}
    <div className="pt-18 pb-14">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <p className="uppercase tracking-[0.35em] text-xs text-gray-400 ">
          {story.category}
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black">
          {story.title}
        </h1>

        <p className=" text-sm text-gray-500">
          {story.read}
        </p>
      </div>

      {/* HERO IMAGE */}
      <div className="max-w-6xl mx-auto px-6 mt-10">
        <div className="relative rounded-[40px] overflow-hidden">
          <Image
            src={story.image}
            alt={story.title}
            width={1600}
            height={1000}
            className="w-full h-[420px] md:h-[560px] object-cover"
          />
        </div>
      </div>
    </div>

    {/* CONTENT */}
    <div className="pb-18">
      <div className="max-w-3xl mx-auto px-6">

        {/* INTRO */}
        <p className="text-xl md:text-2xl leading-relaxed text-gray-800 first-letter:text-7xl first-letter:font-serif first-letter:mr-3 first-letter:float-left">
          {story.content.intro}
        </p>

        {/* DIVIDER */}
        <div className="my-10 h-px bg-gray-200" />

        {/* BODY */}
        <p className="text-lg leading-relaxed text-gray-700">
          {story.content.section1}
        </p>

        {/* QUOTE */}
        <blockquote className="my-5 px-10 py-10 bg-gray-50 rounded-3xl text-2xl leading-relaxed italic text-gray-900">
          “{story.content.quote}”
        </blockquote>

      </div>

      {/* FULL WIDTH IMAGE */}
      <div className="max-w-6xl mx-auto px-6 my-8">
        <div className="relative rounded-[40px] overflow-hidden">
          <Image
            src="/abouthero.jpg"
            alt="Editorial moment"
            width={1600}
            height={900}
            className="w-full h-[380px] md:h-[520px] object-cover"
          />
        </div>
      </div>

      {/* ENDING */}
      <div className="max-w-3xl mx-auto px-6">

        <p className="text-lg leading-relaxed text-gray-700">
          {story.content.section2}
        </p>

        <div className="mt-5 border-t pt-10">
          <p className="text-base text-gray-500 italic">
            {story.content.ending}
          </p>
        </div>

      </div>
    </div>
  </section>
);

}
