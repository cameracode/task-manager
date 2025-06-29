"use client";

import { Card } from "@/components/ui/card";
import React, { ReactNode } from "react";
import { FaTasks, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

type SingleCard = {
    title: string;
    value: string;
    icon: ReactNode;
};

export default function StatCards() {
    // Array of Task statistics cards
    const stats = [
        {
            title: "Total Tasks",
            value: "120",
            icon: <FaTasks className="text-primary" />,
        },
        {
            title: "Completed Tasks",
            value: "85",
            icon: <FaCheckCircle />,
        },
        {
            title: "High Priority Tasks",
            value: "15",
            icon: <FaExclamationTriangle className="text-yellow-500" />,
        },
    ];

    return (
        <div className="grid grid-cols-3 max-sm:grid-cols-1 mt-7 gap-6 p-6">
            {stats.map((stat, index) => (
                <SingleStatCard key={index} SingleCard={stat} />
            ))}
        </div>
    );
}

function SingleStatCard({ SingleCard }: { SingleCard: SingleCard}) {
    return (
        <Card className="p-4 flex flex-col gap-2 shadow-none">
            {/* Header */}
            <div className="flex items-center justify-between">
                {/* Card Title */}
                <span className="text-sm font-semibold text-slate-600">
                    {SingleCard.title}
                </span>
                {/* icon wrapper and the icon */}
                <div className="size-7 rounded-md flex items-center justify-center text-sm 
                bg-primary/25 font-bold text-primary">
                    {SingleCard.icon}
                </div>
            </div>

            { /* Value */}
            <div className="text-3xl font-bold">{SingleCard.value}</div>
        </Card>
    );
}