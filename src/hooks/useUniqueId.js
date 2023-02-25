import { useId } from "react";

function useUniqueId() {
  var uid = useId();
  console.log(uid);
  return { id: uid };
}

export default useUniqueId;
