export interface ScheduleDay {
  title: string;
  subtitle?: string;
  events: ScheduleEvent[];
}

export interface ScheduleEvent {
  time: string;
  title: string;
  description?: string;
}

export const SCHEDULE_DAYS: ScheduleDay[] = [
  {
    title: "Thursday, 2nd Oct",
    events: [
      {
        time: "14:30",
        title: "Doors Open",
        description: "Welcome & Team Matching",
      },
      {
        time: "15:00",
        title: "Opening Ceremony",
        description: "@ Main Stage",
      },
      {
        time: "19:30",
        title: "Pitching Competition",
        description: "Start of pitching competition",
      },
      {
        time: "20:45",
        title: "Prizes Ceremony",
        description: "Prizes ceremony",
      },
    ],
  }
];
