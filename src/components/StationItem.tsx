import * as React from "react";
import { StationCard } from "./styled/Lib";
import { Dispatch } from "redux";
import { playStation } from "../store/actionCreators";
import { useDispatch } from "react-redux";

export default (props: IStation): JSX.Element => {
  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = React.useCallback(
    (props: IStation) => dispatch(playStation(props)),
    [dispatch]
  );

  return (
    <StationCard onClick={() => saveArticle(props)}>
      <div>
        <img src={props.imgUrl} className={"userpic"}></img>
      </div>

      <div className={"info"}>
        <div className="name">{props.name}</div>
        <div className="tags">
          {props.tags.map((tag) => (
            <div className="tag">{tag}</div>
          ))}
        </div>
        <div className="description">{props.description}</div>
      </div>
    </StationCard>
  );
};
