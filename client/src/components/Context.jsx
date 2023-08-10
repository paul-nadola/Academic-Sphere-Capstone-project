import { createContext, useEffect, useReducer } from "react";
const initialState = {
  token: sessionStorage.getItem("token"),
  user: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

const ProjectContext = createContext(initialState);

function ProjectProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://academic-sphere-tables.onrender.com/session", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + initialState.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "SET_USER", payload: data.user });
        console.log(data)
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <ProjectContext.Provider value={{ state, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
}

export { ProjectContext, ProjectProvider };
