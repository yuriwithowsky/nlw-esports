export interface CreateAd {
  name: string;
  yearsPlaying: number;
  discord: string;
  weekDays: number[];
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;
}
