export const SUBJECT_NAMES: Record<string, string> = {
  gaokao: "高考 (Gaokao)",
  "math-contest": "数学竞赛 (Math Contest)",
  oi: "OI",
  physics: "Physics",
  math: "Math",
};

export function getSubjectName(subject: string): string {
  return SUBJECT_NAMES[subject] ?? subject;
}
