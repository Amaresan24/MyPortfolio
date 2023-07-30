import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="2014 - 2015"
      iconStyle={{ background: "#3e497a", color: "#fff" }}
      icon={<SchoolIcon />}
    >
      <h3 className="vertical-timeline-element-title">
     Islamiah Higher Secondary School
      </h3>
      <p> Secondary School Leaving Certificate /10th </p>
    </VerticalTimelineElement>  
      
      <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
         Islamiah Higher Secondary School
          </h3>
          <p> High School Education /12th </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Bharath Institute of Higher Education and Research 
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor of Technology
          </h4>

          <p> Computer Science and Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Software Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
         Vellore ,TamilNadu ,India
          </h4>
          <p>Developed the Front-End  infrastructure for 3 projects.</p>
        </VerticalTimelineElement>

 
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
