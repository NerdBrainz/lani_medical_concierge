import Head from 'next/head'
import Link from 'next/link'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import Pricing from '@/components/Pricing'
import portraitImage from '@/images/avatar.png'

export default function ServicesIndex() {
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
        <title>Services | Lani Taichung Medical Concierge</title>
        <meta
          name="description"
          content="Lani Taichung Medical Concierge offers a comprehensive range of personalized healthcare services in Taichung. Our services include appointment scheduling, hospital selection, physician referrals, interpretation and translation services, airport transfer and accommodation, medical record coordination, visa and travel support, second opinion services, medical billing and insurance coordination, post-treatment care, and wellness and preventive care. We cater to the needs of both local and international patients, ensuring a seamless and stress-free healthcare experience. Contact us to learn more about how our dedicated team can assist you with your healthcare needs in Taichung."
        />
        <link rel="canonical" href="https://taichungconcierge.com/services" />
        <meta
          name="keywords"
          content="Lani Taichung Medical Concierge, healthcare services, Taichung, appointment scheduling, hospital selection, physician referrals, interpretation services, translation services, airport transfer, accommodation, medical record coordination, visa support, travel support, second opinion services, medical billing, insurance coordination, post-treatment care, wellness care, preventive care"
        />
        <meta
          property="og:title"
          content="Services | Lani Taichung Medical Concierge"
        />
        <meta
          property="og:description"
          content="Lani Taichung Medical Concierge offers a comprehensive range of personalized healthcare services in Taichung. Our services include appointment scheduling, hospital selection, physician referrals, interpretation and translation services, airport transfer and accommodation, medical record coordination, visa and travel support, second opinion services, medical billing and insurance coordination, post-treatment care, and wellness and preventive care. We cater to the needs of both local and international patients, ensuring a seamless and stress-free healthcare experience. Contact us to learn more about how our dedicated team can assist you with your healthcare needs in Taichung."
        />
        <meta property="og:image" content={portraitImage} />
        <meta
          property="og:url"
          content="https://taichungconcierge.com/services"
        />
        <meta
          name="twitter:title"
          content="Services | Lani Taichung Medical Concierge"
        />
        <meta
          name="twitter:description"
          content="Lani Taichung Medical Concierge offers a comprehensive range of personalized healthcare services in Taichung. Our services include appointment scheduling, hospital selection, physician referrals, interpretation and translation services, airport transfer and accommodation, medical record coordination, visa and travel support, second opinion services, medical billing and insurance coordination, post-treatment care, and wellness and preventive care. We cater to the needs of both local and international patients, ensuring a seamless and stress-free healthcare experience. Contact us to learn more about how our dedicated team can assist you with your healthcare needs in Taichung."
        />
        <meta name="twitter:image" content={portraitImage} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <SimpleLayout
        title="Expert Care and Tailored Solutions for Your Healthcare Needs"
        intro="Welcome to our comprehensive range of medical concierge services in Taichung. At our medical concierge, we strive to provide you with exceptional care and tailored solutions for all your health needs. Whether you require assistance with doctor appointments, hospital admissions, specialized treatments, or wellness services, our dedicated team is here to guide and support you every step of the way."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="md:grid md:grid-cols-4 md:items-baseline"
              >
                <Card className="md:col-span-3">
                  <Card.Title>{service.split(': ')[0]}</Card.Title>
                  <Card.Eyebrow
                    dateTime={service.date}
                    className="md:hidden"
                    decorate
                  >
                    Service
                  </Card.Eyebrow>
                  <Card.Description>{service.split(': ')[1]}</Card.Description>
                  <Card.Cta>
                    <Link href="/contact">Learn more</Link>
                  </Card.Cta>
                </Card>
                <Card.Eyebrow
                  dateTime={service.date}
                  className="mt-1 hidden md:block"
                >
                  Service
                </Card.Eyebrow>
              </div>
            ))}
          </div>
        </div>
      </SimpleLayout>
      <Pricing />
    </>
  )
}
