import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { InstagramIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/avatar.png'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Lani Medical Concierge</title>
        <meta
          name="description"
          content="Meet Lani, Your Trusted Medical Concierge in Taichung
          "
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt="Picture of pretty Asian woman"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Meet Lani, Your Trusted Medical Concierge in Taichung
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                With over 15 years of invaluable experience as a dedicated nurse
                in one of China Medical University Hospitals, Lani brings a
                wealth of knowledge and expertise to the realm of healthcare
                concierge services. Now based in the vibrant city of Taichung,
                Lani here to provide you with unparalleled support and
                personalized assistance throughout your healthcare journey.
              </p>
              <p>
                Having witnessed firsthand the transformative power of
                compassionate care, I&apos;m driven by a deep commitment to
                ensuring every patient receives the highest level of attention
                and comfort. With their extensive background in healthcare, they
                possess an innate understanding of the complexities and
                challenges individuals may encounter when seeking medical
                assistance.
              </p>
              <p>
                As a medical concierge, Lani takes pride in offering a
                comprehensive suite of services tailored to your unique needs.
                Whether you are a local resident or an international visitor,
                Lani dedicated to making your healthcare experience in Taichung
                as smooth and stress-free as possible.
              </p>
              <p>
                From the moment you reach out to Lani, you can expect a seamless
                journey. They will assist you in selecting the most suitable
                hospitals or clinics based on your specific medical
                requirements. Their established network of renowned doctors and
                specialists ensures that you receive the highest standard of
                care, with a focus on personalized treatment plans and tailored
                solutions.
              </p>
              <p>
                In addition to hospital selection and physician referrals,I
                offer a range of invaluable services designed to enhance your
                overall experience. They will assist you with appointment
                scheduling, ensuring you have timely access to healthcare
                services. Their interpretation and translation services bridge
                any language barriers, ensuring effective communication between
                you and your healthcare providers.
              </p>
              <p>
                Moreover, Lani understands that traveling for medical purposes
                can be overwhelming. That&apos;s why they go the extra mile to
                provide assistance with airport transfers and accommodation
                arrangements, so you can focus on your well-being without any
                added stress.
              </p>
              <p>
                Beyond their expertise in medical logistics, I&apos;m also
                well-versed in the intricacies of medical billing and insurance
                coordination. They will guide you through the process, liaising
                with insurance companies and providing transparent cost
                estimates, allowing you to navigate the financial aspects of
                your healthcare journey with ease.
              </p>
              <p>
                At my concierge service, their commitment to your well-being
                extends beyond medical procedures. They will help coordinate
                post-treatment care, ensuring you have the necessary follow-up
                appointments and rehabilitation services for a smooth recovery.
              </p>
              <p>
                With me by your side, you can trust that you are in capable and
                caring hands. They take the time to listen to your concerns,
                understand your needs, and tailor their services accordingly.
                Their goal is to empower you with knowledge, support, and peace
                of mind as you navigate the healthcare system in Taichung.
              </p>
              <p>
                Discover the difference that personalized and attentive care can
                make in your healthcare journey. Contact me today to embark on a
                seamless and comfortable experience, backed by years of
                expertise and a genuine dedication to your well-being.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>

              <SocialLink
                href="mailto:placeholder@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                placeholder
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
