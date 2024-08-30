import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./api/user";
import { useUserStore } from "./state/user-store";
import { useEffect } from "react";

function App() {
  const {users, setUsers} = useUserStore()

  const { data, isPending, isError } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });

  useEffect(() => {
    if(data) {
      setUsers(data)
    }
  }, [data])

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }



  return (
    <div className="">
      {users.map((user) => (
        <div key={user.id} >
          {user.name}
        </div>
      ))}
    </div>
  );
}

export default App;
