"use client";

import { useState } from "react";
import {
  Radio,
  Plus,
  Minus,
  Play,
  Pause,
  CheckCircle,
  Goal,
  AlertTriangle,
  Clock,
  Shield,
  Activity,
} from "lucide-react";
import { DashboardShell } from "@/components/common/dashboard-shell";
import { MOCK_MATCHES } from "@/services/match-service";
import { Match, MatchEvent, EventType } from "@/types";

export default function AdminLiveControlPage() {
  const [selectedMatchId, setSelectedMatchId] = useState<string>(MOCK_MATCHES[0].id);
  const [matches, setMatches] = useState<Match[]>(MOCK_MATCHES);

  const currentMatch = matches.find((m) => m.id === selectedMatchId) || matches[0];

  const [minuteInput, setMinuteInput] = useState<number>(65);
  const [eventTypeInput, setEventTypeInput] = useState<EventType>("Goal");
  const [playerInput, setPlayerInput] = useState<string>("");
  const [teamChoice, setTeamChoice] = useState<"home" | "away">("home");

  const handleScore = (team: "home" | "away", delta: number) => {
    setMatches((prevMatches) =>
      prevMatches.map((m) => {
        if (m.id === currentMatch.id) {
          return {
            ...m,
            homeScore: team === "home" ? Math.max(0, m.homeScore + delta) : m.homeScore,
            awayScore: team === "away" ? Math.max(0, m.awayScore + delta) : m.awayScore,
          };
        }
        return m;
      })
    );
  };

  const handleStatusChange = (newStatus: "Scheduled" | "Live" | "Finished") => {
    setMatches((prevMatches) =>
      prevMatches.map((m) => {
        if (m.id === currentMatch.id) {
          return { ...m, status: newStatus };
        }
        return m;
      })
    );
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!playerInput.trim()) return;

    const targetTeam = teamChoice === "home" ? currentMatch.homeTeam : currentMatch.awayTeam;

    const newEvent: MatchEvent = {
      id: `ev-${Date.now()}`,
      minute: minuteInput,
      type: eventTypeInput,
      teamId: targetTeam.id,
      playerName: playerInput,
      details: `${eventTypeInput} for ${targetTeam.shortName}`,
    };

    setMatches((prevMatches) =>
      prevMatches.map((m) => {
        if (m.id === currentMatch.id) {
          const updatedEvents = [newEvent, ...m.events];
          let newHomeScore = m.homeScore;
          let newAwayScore = m.awayScore;

          if (eventTypeInput === "Goal") {
            if (teamChoice === "home") newHomeScore += 1;
            else newAwayScore += 1;
          }

          return {
            ...m,
            homeScore: newHomeScore,
            awayScore: newAwayScore,
            events: updatedEvents,
          };
        }
        return m;
      })
    );

    setPlayerInput("");
  };

  return (
    <DashboardShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-100 flex items-center gap-3">
              <Radio className="w-8 h-8 text-rose-400 animate-pulse" />
              Live Match Control Room
            </h1>
            <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
              Admin score updates, game state triggers, and match event logger
            </p>
          </div>

          {/* Match Selector */}
          <div className="flex items-center gap-2 bg-slate-900 p-2 rounded-2xl border border-slate-800">
            <span className="text-xs font-bold text-slate-400 pl-2">Select Match:</span>
            <select
              value={selectedMatchId}
              onChange={(e) => setSelectedMatchId(e.target.value)}
              className="bg-slate-950 text-slate-200 border border-slate-800 rounded-xl px-3 py-1.5 text-xs font-bold focus:outline-none focus:border-emerald-500"
            >
              {matches.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.homeTeam.shortName} vs {m.awayTeam.shortName} ({m.status})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Live Controller Console Card */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-6 border border-emerald-500/30">
          {/* Top Status Trigger Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-400">{currentMatch.tournamentName}</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300 font-medium">{currentMatch.venue}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-slate-400 font-bold">Status Trigger:</span>
              <button
                onClick={() => handleStatusChange("Live")}
                className={`px-3 py-1 rounded-xl font-bold flex items-center gap-1 ${
                  currentMatch.status === "Live"
                    ? "bg-rose-500 text-white shadow-md"
                    : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
                }`}
              >
                <Play className="w-3 h-3 fill-current" /> Start Live
              </button>
              <button
                onClick={() => handleStatusChange("Finished")}
                className={`px-3 py-1 rounded-xl font-bold flex items-center gap-1 ${
                  currentMatch.status === "Finished"
                    ? "bg-emerald-600 text-white shadow-md"
                    : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
                }`}
              >
                <CheckCircle className="w-3 h-3" /> End Match
              </button>
            </div>
          </div>

          {/* Interactive Score Modifier */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center py-4">
            {/* Home Team Control */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Home Squad
              </span>
              <h3 className="font-black text-xl text-slate-100">{currentMatch.homeTeam.name}</h3>
              <div className="text-5xl font-black text-emerald-400 my-2">
                {currentMatch.homeScore}
              </div>
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => handleScore("home", 1)}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs shadow-lg shadow-emerald-950 flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" /> Goal (+1)
                </button>
                <button
                  onClick={() => handleScore("home", -1)}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs"
                >
                  <Minus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Away Team Control */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Away Squad
              </span>
              <h3 className="font-black text-xl text-slate-100">{currentMatch.awayTeam.name}</h3>
              <div className="text-5xl font-black text-emerald-400 my-2">
                {currentMatch.awayScore}
              </div>
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => handleScore("away", 1)}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs shadow-lg shadow-emerald-950 flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" /> Goal (+1)
                </button>
                <button
                  onClick={() => handleScore("away", -1)}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs"
                >
                  <Minus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Event Logging Form & Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Add Match Event Form */}
          <div className="glass-card p-6 rounded-3xl space-y-4">
            <h3 className="font-extrabold text-base text-slate-100 flex items-center gap-2">
              <Activity className="w-5 h-5 text-emerald-400" />
              Log Match Event
            </h3>

            <form onSubmit={handleAddEvent} className="space-y-4 text-xs font-semibold">
              <div className="space-y-1">
                <label className="text-slate-300">Target Team</label>
                <select
                  value={teamChoice}
                  onChange={(e) => setTeamChoice(e.target.value as any)}
                  className="w-full bg-slate-900 text-slate-200 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold"
                >
                  <option value="home">{currentMatch.homeTeam.name} (Home)</option>
                  <option value="away">{currentMatch.awayTeam.name} (Away)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-slate-300">Event Type</label>
                <select
                  value={eventTypeInput}
                  onChange={(e) => setEventTypeInput(e.target.value as EventType)}
                  className="w-full bg-slate-900 text-slate-200 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold"
                >
                  <option value="Goal">⚽ Goal</option>
                  <option value="YellowCard">🟨 Yellow Card</option>
                  <option value="RedCard">🟥 Red Card</option>
                  <option value="Substitution">🔄 Substitution</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-slate-300">Minute</label>
                  <input
                    type="number"
                    value={minuteInput}
                    onChange={(e) => setMinuteInput(Number(e.target.value))}
                    className="w-full bg-slate-900 text-slate-200 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-300">Player Name</label>
                  <input
                    type="text"
                    value={playerInput}
                    onChange={(e) => setPlayerInput(e.target.value)}
                    placeholder="e.g. Alex Vance"
                    className="w-full bg-slate-900 text-slate-200 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-md transition-all"
              >
                + Log Match Event
              </button>
            </form>
          </div>

          {/* Current Event Stream */}
          <div className="lg:col-span-2 glass-card p-6 rounded-3xl space-y-4">
            <h3 className="font-extrabold text-base text-slate-100 flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-400" />
              Live Event Timeline Log ({currentMatch.events.length} Events)
            </h3>

            <div className="space-y-3">
              {currentMatch.events.map((ev) => (
                <div
                  key={ev.id}
                  className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs font-semibold"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center font-black text-emerald-400">
                      {ev.minute}'
                    </span>
                    <div>
                      <p className="font-extrabold text-slate-100">{ev.playerName}</p>
                      <p className="text-slate-400 text-[11px]">{ev.details}</p>
                    </div>
                  </div>

                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${
                      ev.type === "Goal"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-amber-500/20 text-amber-400"
                    }`}
                  >
                    {ev.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
