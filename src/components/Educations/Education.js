import React from "react";
import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Import images
import image1 from "../../assets/images/SSLC.jpeg";
import image2 from "../../assets/images/HSC.jpeg";
import image3 from "../../assets/images/MEC.jpg";

export default function Education() {
  return (
    <div className="App">
      <h1 style={{ color: "#ffc000" }}>Education</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#ffc000", color: "#ffffff" }}
          contentArrowStyle={{ borderRight: "7px solid #ffc000" }}
          date="2019 - 2020"
          iconStyle={{ background: "transparent", color: "#ffffff" }}
          icon={<img src={image1} alt="SSLC" style={{ width: '100%' , height: "100%", borderRadius: "50%" }} />}
        >
          <h3 className="vertical-timeline-element-title">
            Secondary School Leaving Certificate (SSLC)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            ROYAL PARK MATRIC HR SEC SCHOOL
          </h4>
          <h5 className="vertical-timeline-element-subtitle">
            Kumaragiripet,Salem
          </h5>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#ffc000", color: "#ffffff" }}
          contentArrowStyle={{ borderRight: "7px solid #ffc000" }}
          date="2021 - 2022"
          iconStyle={{ background: "transparent", color: "#ffffff" }}
          icon={<img src={image2} alt="HSC" style={{ width: '100%' , height: "100%", borderRadius: "50%" }} />}
        >
          <h3 className="vertical-timeline-element-title">
            Higher Secondary Certificate (HSC)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            ROYAL PARK MATRIC HR SEC SCHOOL
          </h4>
          <h5 className="vertical-timeline-element-subtitle">
            Kumaragiripet,Salem
          </h5>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#ffc000", color: "#ffffff" }}
          contentArrowStyle={{ borderRight: "7px solid #ffc000" }}
          date="2022 - Present"
          iconStyle={{ background: "transparent", color: "#ffffff" }}
          icon={<img src={image3} alt="B.Tech AI & DS" style={{ width: '100%' , height: "100%", borderRadius: "50%" }} />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Technology (B.Tech) in
          </h3>
          <h3 className="vertical-timeline-element-title">
            Artificial Intelligence and Data Science (AI&DS)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            MUTHAYAMMAL ENGINEERING COLLEGE
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
            An Autonomous Institution
          </h4>
          <h5 className="vertical-timeline-element-subtitle">
            Kakkaveri, Rasipuram, Namakkal
          </h5>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
