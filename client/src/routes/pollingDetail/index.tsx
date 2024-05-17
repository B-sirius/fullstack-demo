import { useUserStore } from "@/stores/userStore";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/header";
import { useState } from "react";
import styles from "./index.module.css";
import { getVoteDetail } from "@/services/votes";

export default function PollingDetail() {
  const { pollingId } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    init();
  }, [pollingId]);

  const init = async () => {
    try {
      const res = await getVoteDetail(Number(pollingId));
      const { title, description } = res;
      setTitle(title);
      setDescription(description);
      setLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <div className={styles.container}>
        {loaded ? (
          <>
            <div>{title}</div>
            <div>{description}</div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
