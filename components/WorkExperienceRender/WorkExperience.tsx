import React from 'react';

import WorkExperienceItem from '@components/WorkExperienceItem';

const WorkExperience = () => {
  return (
    <>
      <WorkExperienceItem
        title="Buddytree"
        address="Remote"
        jobTitle="Frontend Developer Contractor"
        time="Feb.&nbsp;2021 - Present"
        links={[{ href: 'https://buddytree.org/', name: 'buddytree.org' }]}
      >
        <li>Developed the entirety of the frontend in collaboration with another developer</li>
        <li>The current sole maintainer of the frontend code</li>
        <li>Creating and styling pages that follow responsive design</li>
        <li>
          Work closely with the CEO and Project Manager to ensure the vision is met in a timely
          manner
        </li>
        <li>Managing and educating interns in React, frontend development and best practices</li>
        <li>
          In constant communication with the backend to implement API&apos;s and complete milestones
        </li>
        <li>Technologies used: NextJS, SCSS, Next Auth, Redux Toolkit</li>
      </WorkExperienceItem>
      <WorkExperienceItem
        title="B.Bros Finishing"
        address="Remote"
        time="Sep.&nbsp;2020"
        jobTitle="Freelance Contractor"
        links={[{ href: 'https://www.bbrosfinishing.ca', name: 'bbrosfinishing.ca' }]}
      >
        <li>Created a website for a local business</li>
        <li>Ensured basic SEO and responsive design</li>
        <li>Utilizes Google Firebase for file serving</li>
        <li>Perfect Google Lighthouse score</li>
      </WorkExperienceItem>
      <WorkExperienceItem
        title="Trust Science"
        address="Edmonton, AB"
        time="May - Aug.&nbsp;2018"
        jobTitle="Summer Intern"
        links={[{ href: 'https://www.trustscience.com/', name: 'trustscience.com' }]}
      >
        <li>Mobile App development with React Native</li>
        <li>Web Portal development with C#, jQuery, and React</li>
        <li>Assisted in refactoring the Mobile App to approximately 60% of its original size</li>
        <li>Created an AWS Lambda function connecting the App, Portal and Databases together</li>
        <li>Identified and corrected UI/UX problems in both the Portal and App</li>
        <li>Traced and fixed bugs in large codebases of 12,000+ lines of code</li>
      </WorkExperienceItem>
    </>
  );
};

export default WorkExperience;