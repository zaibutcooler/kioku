import {
  AiOutlineFlag,
  AiOutlineUnorderedList,
  AiOutlineFileText,
  AiOutlineBook,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineTeam,
  AiOutlineFile,
  AiOutlineCalendar,
  AiOutlineCheckCircle,
  AiOutlineTrophy,
  AiOutlineInfoCircle,
  AiOutlineStar,
  AiOutlineMail,
  AiOutlineQuestionCircle,
} from "react-icons/ai";

export const landingLinks = [
  { name: "About", go: "#about", icon: <AiOutlineInfoCircle /> },
  { name: "Features", go: "#personalFeatures", icon: <AiOutlineStar /> },
  { name: "Collaborating", go: "#projectFeatures", icon: <AiOutlineTeam /> },
  { name: "Contact", go: "#contact", icon: <AiOutlineMail /> },
  { name: "Support", go: "#support", icon: <AiOutlineQuestionCircle /> },
];

export const personalLinks = [
  { name: "Home", go: "/home/", icon: <AiOutlineHome /> },
  { name: "My Goals", go: "/home/personal/goals", icon: <AiOutlineFlag /> },
  {
    name: "My tasks",
    go: "/home/personal/tasks",
    icon: <AiOutlineUnorderedList />,
  },
  {
    name: "My Notes",
    go: "/home/personal/notes",
    icon: <AiOutlineFileText />,
  },
  { name: "Diary", go: "/home/personal/diary", icon: <AiOutlineBook /> },
  {
    name: "Achievements",
    go: "/home/personal/accomplishments",
    icon: <AiOutlineTrophy />,
  },
];

export const projectLinks = [
  { name: "Project Overview", go: "/", icon: <AiOutlineProject /> },
  { name: "Tasks", go: "/", icon: <AiOutlineUnorderedList /> },
  { name: "Team Members", go: "/", icon: <AiOutlineTeam /> },
  { name: "Documents", go: "/", icon: <AiOutlineFile /> },
  { name: "Calendar", go: "/", icon: <AiOutlineCalendar /> },
  { name: "Progress", go: "/", icon: <AiOutlineCheckCircle /> },
];
