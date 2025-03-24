"use client";

import { useEffect, useRef, useState } from "react";
import ConnectionStatisticsDateSection from "./connection-statistics-date-section";
import ConnectionStatisticsMetrics from "./connection-statistics-metrics";

interface ChartData {
  name: string;
  value: number;
  color: string;
}

export function ConnectionStatistics() {
  const [dateRangeOpen, setDateRangeOpen] = useState(false);
  const [campaignDropdownOpen, setCampaignDropdownOpen] = useState(false);

  const inviteChartRef = useRef<HTMLCanvasElement>(null);
  const leadChartRef = useRef<HTMLCanvasElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const inviteData = [
    { name: "Invited", value: 45, color: "#42389D" },
    { name: "Accepted", value: 25, color: "#5145CD" },
    { name: "Replied", value: 20, color: "#5850EC" },
    { name: "Messaged", value: 10, color: "#6875F5" },
    { name: "Liked", value: 10, color: "#8DA2FB" },
    { name: "Endorsed", value: 10, color: "#B4C6FC" },
  ];

  const leadData = [
    { name: "Total Lead", value: 40, color: "#F0F5FF" },
    { name: "Invited", value: 30, color: "#8DA2FB" },
    { name: "Accepted", value: 20, color: "#5850EC" },
    { name: "Replied", value: 10, color: "#6875F5" },
  ];

  useEffect(() => {
    drawDonutChart(inviteChartRef.current, inviteData, "66.4k", "Total Invite");
    drawDonutChart(leadChartRef.current, leadData, "66.4k", "Total Lead");
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        statsRef.current &&
        !statsRef.current.contains(event.target as Node)
      ) {
        setDateRangeOpen(false);
        setCampaignDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const drawDonutChart = (
    canvas: HTMLCanvasElement | null,
    data: ChartData[],
    centerText: string,
    centerSubtext: string
  ) => {
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate total value
    const total = data.reduce((sum, item) => sum + item.value, 0);

    // Draw donut chart
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) * 0.8;
    const innerRadius = radius * 0.6;

    let startAngle = -Math.PI / 2;

    data.forEach((item) => {
      const sliceAngle = (item.value / total) * 2 * Math.PI;

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
      ctx.arc(
        centerX,
        centerY,
        innerRadius,
        startAngle + sliceAngle,
        startAngle,
        true
      );
      ctx.closePath();

      ctx.fillStyle = item.color;
      ctx.fill();

      startAngle += sliceAngle;
    });

    // Draw center text
    ctx.textAlign = "center";
    ctx.fillStyle = "#000";
    ctx.font = "bold 24px Arial";
    ctx.fillText(centerText, centerX, centerY);

    ctx.font = "12px Arial";
    ctx.fillStyle = "#666";
    ctx.fillText(centerSubtext, centerX, centerY + 20);
  };

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-2 mb-6"
      ref={statsRef}
    >
      {/* start date - end date */}
      <ConnectionStatisticsDateSection
        dateRangeOpen={dateRangeOpen}
        setDateRangeOpen={setDateRangeOpen}
        campaignDropdownOpen={campaignDropdownOpen}
        setCampaignDropdownOpen={setCampaignDropdownOpen}
        inviteChartRef={inviteChartRef as React.RefObject<HTMLCanvasElement>}
        inviteData={inviteData}
      />

      {/* end date - start date end */}

      {/* connection statistics metrics */}
      <ConnectionStatisticsMetrics
        leadChartRef={leadChartRef as React.RefObject<HTMLCanvasElement>}
        leadData={leadData}
      />
    </div>
  );
}
