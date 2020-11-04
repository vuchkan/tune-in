import * as React from "react";
import { useQuery } from "react-query";
import axios from "../api/axios.config";
import "../styles.css";
import Layout from "./styled/Layout";
import StationCard from "./StationItem";
import MusicPlayer from "./MusicPlayer";
import { PageHeading, Logo, Divider, Player, PageContent } from "./styled/Lib";

const getStations = async (): Promise<{ data: IStation[] }> => {
  const { data } = await axios.get("/stations.json");
  return data;
};

const StationsList: React.FC = () => {
  const { status, data } = useQuery("stations", getStations);

  if (status === "loading") {
    return <div>loading...</div>;
  }

  if (status === "error") {
    return <div>{"An error has occurred"}</div>;
  }

  return (
    <Layout>
      <Player className="player">
        <MusicPlayer />
      </Player>
      <PageContent className={"page-content"}>
        <PageHeading>STATIONS:</PageHeading>
        <div className={"stations-list"}>
          {data?.data?.map((station) => (
            <StationCard key={station.id} {...station} />
          ))}
        </div>
      </PageContent>
      <Divider className={"divider"}>
        <Logo />
      </Divider>
    </Layout>
  );
};

export default StationsList;
