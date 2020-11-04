import * as React from "react";
import "./styles.css";
import StationsList from "./components/StationsList";
import { QueryCache, ReactQueryCacheProvider } from "react-query";

const queryCache = new QueryCache();

const App: React.FC = () => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <StationsList />
    </ReactQueryCacheProvider>
  );
};

export default App;
