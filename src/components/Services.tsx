import { ChartPieIcon, ClockIcon, ComputerDesktopIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Push to deploy',
    description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: ClockIcon,
  },
  {
    name: 'SSL certificates',
    description:
        'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: ChartBarIcon,
  },
  {
    name: 'Simple queues',
    description:
        'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ChartPieIcon,
  },
  {
    name: 'Advanced security',
    description:
        'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: ComputerDesktopIcon,
  },
]

export default function Services() {
  return (
      <div className="relative w-full py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-primary-light">Wat wij doen</h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-800 dark:text-white sm:text-5xl lg:text-balance">
              Praktische oplossingen voor uw bedrijf
            </p>
            <p className="mt-6 text-lg/6 text-gray-800 dark:text-white">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
              pulvinar et feugiat blandit at. In mi viverra elit nunc.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16 group">
                    <dt className="text-base/7 font-semibold text-primary-light">
                      <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-primary group-hover:bg-primary-light">
                        <feature.icon aria-hidden="true" className="size-6 text-white" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base/7 text-gray-900 dark:text-gray-300">{feature.description}</dd>
                  </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
  )
}