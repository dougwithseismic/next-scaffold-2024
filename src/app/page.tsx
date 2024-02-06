import ActivityFeed from "@/components/activity-feed";
import View from "@/components/common/view";
import dummyNotes, {
    contactUser,
    currentUser,
    inna,
    innasNotes,
} from "@/dummy-data";

export default function Home() {
  return (
    <>
      <div className="container flex items-center justify-center gap-4 max-w-4xl">
        <View title="Activity Feed">
          <div className="grid lg:grid-cols-2   gap-4 mx-auto w-full  h-full">
            <ActivityFeed
              currentUser={currentUser}
              contactUser={contactUser}
              initialNotes={dummyNotes}
            />
            <ActivityFeed
              currentUser={currentUser}
              contactUser={inna}
              initialNotes={innasNotes}
            />
          </div>
        </View>
      </div>
    </>
  );
}
