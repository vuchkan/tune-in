import * as React from "react";
import "./styles.css";
import Player from "./components/Player";
import { QueryCache, ReactQueryCacheProvider } from "react-query";

const queryCache = new QueryCache();

const App: React.FC = () => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Player/>
    </ReactQueryCacheProvider>
  );
};

export default App;
