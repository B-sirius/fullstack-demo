import Header from "@/components/header";
import { createVote } from "@/services/votes";
import { isAxiosError } from "axios";
import styles from "./index.module.css";
import { useState } from "react";

export default function Polling() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleRegister = async () => {
    try {
      await createVote(title, description);
      alert("Polling created");
      window.location.href = "/";
    }  catch (err) {
      if (isAxiosError(err)) {
        alert(err.response?.data?.message || err.message || "create polling failed");
      } else {
        throw err;
      }
    }
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
        </div>
        <div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </div>
        <div>
          <button onClick={handleRegister}>Create Polling</button>
        </div>
      </div>
    </div>
  );
}
