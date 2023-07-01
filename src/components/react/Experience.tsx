import { SectionTitle } from '@components/react';
import { Direction, Expirience } from '@models/global';
import verticalTimeLinePackage from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import experiences from '@config/experiences.json';

const { VerticalTimeline, VerticalTimelineElement } = verticalTimeLinePackage;

const ExperienceCard = ({ experience }: { experience: Expirience }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={experience.date}
      icon={
        <div className="w-full h-full flex justify-center items-center">
          {experience.logo ? (
            <img
              src={experience.logo}
              alt={`experience-${experience.company.toLowerCase()}`}
              className="rounded-full"
            />
          ) : (
            <span className="text-3xl font-semibold">
              {experience.company.slice(0, 1)}
            </span>
          )}
        </div>
      }
    >
      <h3 className="vertical-timeline-element-title text-xl font-bold">
        {experience.title}
      </h3>
      <span className="text-base font-semibold">
        <i>{experience.company}</i>
      </span>
      <ul className="list-disc pl-4">
        {experience.descriptions.map((description, index) => (
          <li key={`experience-${index}`} className="mt-2">
            <span className="font-semibold">{description.subtitle}</span>{' '}
            <span className="text-sm">{description.desc}</span>
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section className="flex flex-col gap-4 mt-12 [&>*:nth-child(2)]:mt-12">
      <SectionTitle
        subtitle="what i have done so far"
        title="Work Experience."
        direction={Direction.DOWN}
        isCenter
      />
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
