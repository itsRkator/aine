// BodyContent.tsx
import LessonPlan from "./LessonPlan";
import Settings from "./Settings";
import Students from "./Students";

interface BodyContentProps {
  tabName: string;
}

const BodyContent: React.FC<BodyContentProps> = ({ tabName }) => {
  let content;
  if (tabName === "students") {
    content = <Students />; // Make sure Students component is imported correctly
  } else if (tabName === "lessonPlan") {
    content = <LessonPlan />;
  } else {
    content = <Settings />;
  }
  return content;
};

export default BodyContent;
