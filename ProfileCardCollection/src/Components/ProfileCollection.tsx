import ProfileCard from "./ProfileCard";
import { profiles } from "../data/profiles";
import PageHeader from "./PageHeader";
import ProfileSearch from "./ProfileSearch";
import ProfileFilter, { type AvailabilityFilter } from "./ProfileFilter";
import { useState } from "react";
import EmptyState from "./EmptyState";

const ProfileCollection = () => {
  const [query, setQuery] = useState("");
  const [availability, setAvailability] = useState<AvailabilityFilter>("all");

  const filteredProfiles = profiles.filter((profile) => {
    const searchTerm = query.toLowerCase();

    const matchesSearch =
      profile.name.toLowerCase().includes(searchTerm) ||
      profile.role.toLowerCase().includes(searchTerm);

    const matchesAvailability =
      availability === "all" ||
      (availability === "available" && profile.available) ||
      (availability === "busy" && !profile.available);

    return matchesSearch && matchesAvailability;
  });

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <PageHeader
          title="Profile Collection"
          description="Meet our creative developers."
        />

        {/* profile Search */}
        <ProfileSearch value={query} onChange={setQuery} />

        {/* Profile Filter */}
        <ProfileFilter value={availability} onChange={setAvailability} />

        {/* Profile count */}
        <p className="mb-5 text-sm text-gray-500">
          {filteredProfiles.length}{" "}
          {filteredProfiles.length === 1 ? "Profile" : "Profiles"} found
        </p>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProfiles.length > 0 ? (
            filteredProfiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))
          ) : (
            <EmptyState message="Try to changing your search or filter" />
          )}
        </section>
      </div>
    </main>
  );
};

export default ProfileCollection;
