import React from "react";
import { render } from "@testing-library/react";
import ActivityFeed from "./index";
import dummyNotes, { contactUser, currentUser } from "@/dummy-data";

describe("ActivityFeed", () => {
  it("renders without crashing", () => {
    const initialNotes = dummyNotes;

    render(
      <ActivityFeed
        currentUser={currentUser}
        contactUser={contactUser}
        initialNotes={initialNotes}
      />
    );
  });
});
