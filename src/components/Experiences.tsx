import {
   VerticalTimeline
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { styles } from "../styles";
import ExperienceCard from "./ExperienceCard";


const Experiences = () => {
  return (
    <div className="mt-40" >
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>

      <div className='mt-20 flex flex-col'>
           <VerticalTimeline
            lineColor="#f8b501"
           >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experiences;
