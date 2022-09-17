export interface GameParams {
  id: string;
  title: string;
  bannerUrl: string;
}

export declare global {
  namespace ReactNavigate {
    interface RootParamList {
      home: undefined;
      game: GameParams;
    }
  }
}
