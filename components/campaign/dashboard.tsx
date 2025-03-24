"use client";
import { ConnectionStatistics } from "./connection-statistics";
import { CampaignTable } from "./campaign-table";
import CampaignHeader from "./CampaignHeader";

export function Dashboard() {
  return (
    <>
      <CampaignHeader />

      <ConnectionStatistics />
      <CampaignTable />
    </>
  );
}
