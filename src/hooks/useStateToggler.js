import { useState } from "react";

export default function useStateToggler(init = false) {
  const [state, setState] = useState(init);

  function toggle(id) {
    setState(!state);
  }

  return [state, toggle];
}
