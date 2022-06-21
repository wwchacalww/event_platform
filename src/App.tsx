import { gql, useQuery } from "@apollo/client";
import { client } from "./lib/apollo";

const GET_LESSON_QUERY = gql`
  query {
    lessons {
      id
      title

      teacher {
        name
      }
    }
  }
`;

type Lesson = {
  id: string;
  title: string;
  teacher: {
    name: string;
  };
};

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSON_QUERY);

  return (
    <ul>
      {data?.lessons.map((lesson) => {
        return (
          <li key={lesson.id}>
            {lesson.title} - {lesson.teacher.name}
          </li>
        );
      })}
    </ul>
  );
}

export default App;
