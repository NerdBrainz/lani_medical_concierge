import Head from 'next/head'

import { Container } from '@/components/Container'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Lani Taichung Medical Concierge</title>
        <meta
          name="description"
          content="Contact Lani Taichung Medical Concierge for personalized healthcare services in Taichung. Our experienced team is available to assist you with your healthcare needs, including appointment scheduling, hospital selection, physician referrals, interpretation and translation services, airport transfer and accommodation, medical record coordination, visa and travel support, second opinion services, medical billing and insurance coordination, post-treatment care, and wellness and preventive care. Reach out to us today to discuss how we can provide you with seamless and stress-free healthcare assistance in Taichung."
        />
        <link rel="canonical" href="https://taichungconcierge.com/contact" />
        <meta
          name="keywords"
          content="Lani Taichung Medical Concierge, contact, healthcare services, Taichung, appointment scheduling, hospital selection, physician referrals, interpretation services, translation services, airport transfer, accommodation, medical record coordination, visa support, travel support, second opinion services, medical billing, insurance coordination, post-treatment care, wellness care, preventive care"
        />
        <meta
          property="og:title"
          content="Contact | Lani Taichung Medical Concierge"
        />
        <meta
          property="og:description"
          content="Contact Lani Taichung Medical Concierge for personalized healthcare services in Taichung. Our experienced team is available to assist you with your healthcare needs, including appointment scheduling, hospital selection, physician referrals, interpretation and translation services, airport transfer and accommodation, medical record coordination, visa and travel support, second opinion services, medical billing and insurance coordination, post-treatment care, and wellness and preventive care. Reach out to us today to discuss how we can provide you with seamless and stress-free healthcare assistance in Taichung."
        />
        <meta
          property="og:image"
          content="https://taichungconcierge.com/images/contact-image.jpg"
        />
        <meta
          property="og:url"
          content="https://taichungconcierge.com/contact"
        />
        <meta
          name="twitter:title"
          content="Contact | Lani Taichung Medical Concierge"
        />
        <meta
          name="twitter:description"
          content="Contact Lani Taichung Medical Concierge for personalized healthcare services in Taichung. Our experienced team is available to assist you with your healthcare needs, including appointment scheduling, hospital selection, physician referrals, interpretation and translation services, airport transfer and accommodation, medical record coordination, visa and travel support, second opinion services, medical billing and insurance coordination, post-treatment care, and wellness and preventive care. Reach out to us today to discuss how we can provide you with seamless and stress-free healthcare assistance in Taichung."
        />
        <meta
          name="twitter:image"
          content="https://taichungconcierge.com/images/contact-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="mb-12 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Get In Touch with{' '}
            <span className="text-4xl font-bold tracking-tight text-teal-400 text-zinc-800 dark:text-teal-200 sm:text-5xl">
              Lani
            </span>{' '}
          </h1>
        </div>
        <section className="body-font relative text-gray-600">
          <div className="absolute inset-0 bg-gray-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1907.412977411732!2d120.67978376939496!3d24.15670340290454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d64689708fd%3A0xeddea3ef5cff7b00!2sChina%20Medical%20University!5e0!3m2!1sen!2stw!4v1686911474333!5m2!1sen!2stw"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="container mx-auto flex px-5 py-24">
            <div className="relative z-10 mt-10 flex w-full flex-col rounded-lg bg-white p-8 shadow-md md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3">
              <div>
                <h1 className="title-font mb-1 text-lg font-medium text-gray-900">
                  Contact Us
                </h1>
                <div>
                  <h2 className="mb-5 leading-relaxed text-gray-600">
                    For inquiries or assistance, please call:
                  </h2>
                  <p>
                    Phone: <a href="tel:+123456789">+1 (234) 567-89</a>
                  </p>
                </div>
                <div>
                  <h2 className="my-5 leading-relaxed text-gray-600">
                    You can also reach us via email:
                  </h2>
                  <p>
                    Email:{' '}
                    <a href="mailto:info@example.com">info@example.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}
