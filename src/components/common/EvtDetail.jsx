import { useParams } from "react-router-dom";
import { allEvents } from "./events";

const EvtDetail = () => {
  const { name } = useParams();
  const currEvt = allEvents.filter((newFilter) => newFilter.name === name);
  return (
    <section className="evt_detail">
      {name} {currEvt[0].desc}
    </section>
  );
};

export default EvtDetail;
