import Head from 'next/head'
import Image from 'next/image'

import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Testimonials } from '@/components/Testimonials'

import laniImage1 from '@/images/photos/lani-image-1.png'
import laniImage2 from '@/images/photos/lani-image-2.png'
import laniImage3 from '@/images/photos/lani-image-3.png'
import laniImage4 from '@/images/photos/lani-image-4.png'
import laniImage5 from '@/images/photos/lani-image-5.png'
import Pricing from '@/components/Pricing'
import portraitImage from '@/images/avatar.png'

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[laniImage1, laniImage2, laniImage3, laniImage4, laniImage5].map(
          (image, imageIndex) => (
            <div
              key={image.src}
              className={clsx(
                'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
                rotations[imageIndex % rotations.length]
              )}
            >
              <Image
                src={image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default function Home() {
  const services = [
    'Appointment scheduling: Assistance in scheduling medical appointments with specialist doctors, clinics, or hospitals, ensuring timely access to healthcare services.',
    'Hospital selection: Guidance and recommendations for selecting the most suitable hospitals or clinics based on your specific medical needs and preferences.',
    'Physician referrals: Assistance in finding and connecting with reputable doctors, specialists, or surgeons who are experts in their respective fields.',
    'Interpretation and translation services: Provision of interpreters or translators to facilitate effective communication between patients and healthcare providers, particularly for international patients.',
    'Airport transfer and accommodation: Arrangement of transportation services to and from the airport, as well as assistance in finding suitable accommodation near the medical facilities.',
    'Medical record coordination: Assistance in obtaining and organizing medical records, test results, and other relevant documents to ensure seamless transfer of information between healthcare providers.',
    'Visa and travel support: Guidance on visa requirements and assistance with necessary paperwork for patients traveling from abroad, including support for visa extensions if required.',
    'Second opinion services: Facilitation of second opinions from renowned medical experts to provide patients with additional perspectives on their diagnoses or treatment plans.',
    'Medical billing and insurance coordination: Support with billing and insurance claims, including liaising with insurance companies and providing cost estimates for medical procedures.',
    'Post-treatment care: Coordination of follow-up appointments, rehabilitation services, and other post-treatment care requirements to ensure a smooth recovery process.',
    'Wellness and preventive care: Access to wellness programs, health screenings, and preventive care services, focusing on maintaining overall well-being.',
  ]
  return (
    <>
      <Head>
        <title>
          Lani Taichung Medical Concierge | Personalized Healthcare Services in
          Taichung
        </title>
        <meta
          name="description"
          content="Lani Taichung Medical Concierge is a trusted healthcare service provider in Taichung, offering personalized medical assistance and concierge services. Our experienced team caters to the needs of local and international patients, providing comprehensive healthcare solutions, including hospital appointments, medical translations, and transportation arrangements. We strive to ensure a seamless and stress-free medical experience for our clients. Discover how our dedicated team can assist you with your healthcare needs in Taichung. Contact us today for personalized assistance."
        />
        <link rel="canonical" href="https://www.lanimedicalconcierge.com/" />
        <meta
          name="keywords"
          content="Lani Taichung Medical Concierge, healthcare service provider, Taichung, personalized medical assistance, concierge services, hospital appointments, medical translations, transportation arrangements, local and international patients, healthcare needs, personalized assistance"
        />
        <meta
          property="og:title"
          content="Lani Taichung Medical Concierge | Personalized Healthcare Services in Taichung"
        />
        <meta
          property="og:description"
          content="Lani Taichung Medical Concierge is a trusted healthcare service provider in Taichung, offering personalized medical assistance and concierge services. Our experienced team caters to the needs of local and international patients, providing comprehensive healthcare solutions, including hospital appointments, medical translations, and transportation arrangements. We strive to ensure a seamless and stress-free medical experience for our clients. Discover how our dedicated team can assist you with your healthcare needs in Taichung. Contact us today for personalized assistance."
        />
        <meta property="og:image" content={portraitImage} />
        <meta
          property="og:url"
          content="https://www.lanimedicalconcierge.com/"
        />
        <meta
          name="twitter:title"
          content="Lani Taichung Medical Concierge | Personalized Healthcare Services in Taichung"
        />
        <meta
          name="twitter:description"
          content="Lani Taichung Medical Concierge is a trusted healthcare service provider in Taichung, offering personalized medical assistance and concierge services. Our experienced team caters to the needs of local and international patients, providing comprehensive healthcare solutions, including hospital appointments, medical translations, and transportation arrangements. We strive to ensure a seamless and stress-free medical experience for our clients. Discover how our dedicated team can assist you with your healthcare needs in Taichung. Contact us today for personalized assistance."
        />
        <meta name="twitter:image" content={portraitImage} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            <span className="text-4xl font-bold tracking-tight text-teal-400 text-zinc-800 dark:text-teal-200 sm:text-5xl">
              Lani
            </span>{' '}
            Taichung Medical Concierge
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            My name is Lani, and I provide medical concierge services in the
            heart of Taichung. Experience exceptional healthcare with Lani
            Medical Concierge. We prioritize your well-being by providing
            personalized medical assistance, renowned specialists, and
            state-of-the-art facilities. Trust us to guide your health journey
            in the heart of Taichung, Taiwan.
          </p>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <Testimonials />
      </Container>
      <Pricing />
    </>
  )
}
