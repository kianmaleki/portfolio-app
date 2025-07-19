import ProfileButtons from "@/components/ProfileButtons";
import ProfileFacts from "@/components/ProfileFacts";
import ProfileInfo from "@/components/ProfileInfo";
import { TabsButtons } from "@/components/TabsButtons";

export default function Home() {
  return (
    <main>
      <ProfileInfo />
      <ProfileFacts />
      <ProfileButtons />
      <TabsButtons />
    </main>
  );
}
