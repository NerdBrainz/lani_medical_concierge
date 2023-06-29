import Link from 'next/link'
const includedFeatures = [
  'Appointment scheduling at all major hospitals and clinics in Taichung City',
  'Attend medical appointments',
  'Medical translations',
  'Prescription/medication pick-ups',
  'Consultations online/phone',
]

export default function Pricing() {
  return (
    <div className="bg-white py-24 dark:bg-zinc-800/50 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-teal-200 sm:text-4xl">
            Simple No-Tricks Pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white">
            Appointment are easy to schedule and emergency help is available for
            a simple additional fee of NTD $3000.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-teal-200">
              Reliable and Confidential
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600 dark:text-white">
              Lani Medical Concierge can help with all of your medical needs in
              a confidential and timely manner in Taichung city.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-teal-600 dark:text-teal-200">
                What&apos;s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3 dark:text-white">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  New Client Appointment Cost
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    $30
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    USD
                  </span>
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    $1000
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    TWD
                  </span>
                </p>
                <Link
                  href="/contact"
                  className="mt-10 block w-full rounded-md bg-teal-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                >
                  Get In Touch
                </Link>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Payment accepted in cash only at time of visit. Receipt
                  provided upon request. Client may use their Taiwan National
                  Health Insurance (NHI) and is responsible for payment of their
                  medical services and prescriptions at time of service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
