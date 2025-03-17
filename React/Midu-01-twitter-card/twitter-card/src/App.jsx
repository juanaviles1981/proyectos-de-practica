import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {


const formatUserName = (userName) => `@${userName}`;

  return (
    <section className="App">
      <TwitterFollowCard
        
        userName="midudev"
        name="M. A. Duran"
      />
    <TwitterFollowCard

        userName="midudev"
        name="M. A. Duran"
      />
    </section>
  );
}
