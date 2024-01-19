import { fadeIn } from '@utils/motion';
import { motion } from 'framer-motion';
import { Direction } from '@models/global';
import Hashtag from './Hashtag';

type Props = {
  title: string;
  description: string;
  sourceImg: string;
  index: number;
  gitUrl?: string;
  webUrl?: string;
  hastags: {
    name: string;
    color: string;
  }[];
};

const ProjectCard = ({
  title,
  description,
  sourceImg,
  index,
  gitUrl,
  webUrl,
  hastags,
}: Props) => (
  <motion.article
    className="project-card rounded-3xl flex flex-col gap-4 max-w-xs relative"
    variants={fadeIn(Direction.DOWN, 'tween', 0.5, index * 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
  >
    <div className="animate-banner [&>.card-banner]:hover:scale-100 [&>.card-banner]:hover:visible">
      <img
        src={sourceImg}
        alt={title}
        className="rounded-t-3xl min-h-[13rem] bg-black/50 text-white"
      />
      <div className="card-banner absolute top-0 w-full bg-black/70 rounded-t-3xl min-h-[13rem] invisible scale-0 transition-transform duration-500">
        {gitUrl && (
          <a href={gitUrl} target="_blank" className="absolute top-4 right-4">
            <img
              src="/images/badge-git.png"
              alt="Git"
              width={30}
              height={30}
              className="rounded-full bg-white w-10 p-[0.34rem] border-2 border-orange-600/90 hover:bg-orange-300"
            />
          </a>
        )}
        {webUrl && (
          <a href={webUrl} target="_blank" className="absolute top-4 left-4">
            <img
              src="/images/logo-web.png"
              alt="Web"
              width={30}
              height={30}
              className="rounded-full bg-white w-10 p-1 border-2 border-black/90 hover:bg-gray-400"
            />
          </a>
        )}
      </div>
    </div>
    <div className="flex flex-col gap-3 p-4 pt-0 h-full">
      <h2 className="font-bold text-2xl">{title}</h2>
      <p className="leading-5 text-sm grow">{description}</p>
      <div className="flex gap-x-2 flex-wrap text-sm">
        {hastags.map((hashtag, index) => (
          <Hashtag key={`hashtag-${index}`} color={hashtag.color}>
            {hashtag.name}
          </Hashtag>
        ))}
      </div>
    </div>
  </motion.article>
);

export default ProjectCard;
