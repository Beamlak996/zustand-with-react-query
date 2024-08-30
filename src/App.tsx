import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./api/user";
import { useUserStore } from "./state/user-store";

function App() {
  const { filters } = useUserStore()

  const { data, isPending, isError } = useQuery({
    queryKey: ["users", filters],
    queryFn: () => getUsers(filters),
  });



  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }



  return (
    <div className="">
      {data.map((user) => (
        <div key={user.id} >
          {user.name}
        </div>
      ))}
    </div>
  );
}

export default App;
