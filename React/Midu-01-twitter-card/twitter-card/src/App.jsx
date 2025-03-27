import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard isFollowing={false} userName="midudev">
        Miguel Duran
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing userName="juanavilesmusica">
        Juan Aviles
      </TwitterFollowCard>
    </section>
  );
}
