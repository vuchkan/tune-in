interface IStation {
  id: string;
  description: string;
  name: string;
  imgUrl: string;
  streamUrl: string;
  tags: Array<string>;
  reliability: number;
  popularity: number;
}

type PlayerState = {
  activeStation?: IStation;
};

type PlayerAction = {
  type: string;
  station: IStation;
};

type DispatchType = (args: PlayerAction) => PlayerAction;
