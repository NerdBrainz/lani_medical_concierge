import Image from 'next/image'
import user1 from 'public/images/photos/user_1.png'
import user2 from 'public/images/photos/user_2.png'
import user3 from 'public/images/photos/user_3.png'
import user4 from 'public/images/photos/user_4.png'
import user5 from 'public/images/photos/user_5.png'

const featuredTestimonial = {
  body: 'Working with Lani has been an exceptional experience.The personalized care and attention to detail she offers is unparalleled. I highly recommend her services to anyone seeking a reliable and trustworthy medical concierge. Thank you, Lani, for your exceptional care!',
  author: {
    name: 'Brenna Goyette',
    handle: 'brennagoyette',
    imageUrl: user1,
    logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg',
  },
}
const testimonials = [
  [
    [
      {
        body: 'I cant recommend Lani enough! Her professionalism and knowledge are unmatched. She made the entire medical process seamless and stress-free. Thank you for your exceptional care!',
        author: {
          name: 'Tom Reynolds',
          handle: 'tomreynolds',
          imageUrl: user2,
        },
      },
    ],
    [
      {
        body: 'Lani provided me with the best medical assistance I could ask for. She was responsive, compassionate, and truly went above and beyond. Im grateful for her support during a challenging time.',
        author: {
          name: 'Lindsay Walton',
          handle: 'lindsaywalton',
          imageUrl: user3,
        },
      },
    ],
  ],
  [
    [
      {
        body: 'Lani definitely exceeded my expectations. Her attention to my needs and care for my well being made me feel valued and well taken care of. I highly recommend her services to anyone in Taichung who needs medical assistance.',
        author: {
          name: 'Richard Cook',
          handle: 'richardcook',
          imageUrl: user4,
        },
      },
    ],
    [
      {
        body: 'Choosing to have Lani help me was one of the best decisions I made. Her expertise and guidance was so good! She made sure I had access to the best doctors and resources. Thank you for going the extra mile Lani!',
        author: {
          name: 'Leonard Krasner',
          handle: 'leonardkrasner',
          imageUrl: user5,
        },
      },
    ],
  ],
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Testimonials() {
  return (
    <div className="relative isolate bg-white pb-32 pt-24 dark:bg-zinc-800/50 sm:pt-32">
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ccfbf1] to-[#34d399]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        aria-hidden="true"
      >
        <div
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ccfbf1] to-[#34d399] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-teal-600 dark:text-teal-200">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-teal-200 sm:text-4xl">
            Some of our amazing clients
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
              <Image
                className="h-10 w-10 flex-none rounded-full bg-gray-50"
                src={featuredTestimonial.author.imageUrl}
                alt=""
                width={10}
                height={10}
              />
              <div className="flex-auto">
                <div className="font-semibold">
                  {featuredTestimonial.author.name}
                </div>
                <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
              </div>
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? 'xl:row-span-2'
                      : 'xl:row-start-1',
                    'space-y-8'
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <Image
                          className="h-10 w-10 rounded-full bg-gray-50"
                          src={testimonial.author.imageUrl}
                          alt=""
                          width={10}
                          height={10}
                        />
                        <div>
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>
                          <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
