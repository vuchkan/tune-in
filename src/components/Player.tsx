import * as React from "react";
import { useQuery } from 'react-query'
import axios from '../api/axios.config'
import "../styles.css";

const getStations = async (): Promise<{ data: IStation[] }> => {
  const { data } = await axios.get('/stations.json')
  return data
};

const Player: React.FC = () => {
  const { status, data } = useQuery('stations', getStations)

  if (status === 'loading') {
    return <div>loading...</div>
  }

  if (status === 'error') {
    return <div>{"An error has occurred"}</div>
  }

  return (
    <>
      <h1>TuneIn Stations:</h1>
      <div>
        {data?.data?.map(e=> <div key={e.id}>{e.name}</div>)}
      </div>

    </>
  );
};

export default Player;
