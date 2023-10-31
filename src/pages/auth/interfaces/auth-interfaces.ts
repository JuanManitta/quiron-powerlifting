export interface RegisterProps {
    fullName: string;
    email: string;
    password: string;
    gym_name: string;
    foundation_date: string | undefined;
    gold_medals: number;
    silver_medals: number;
    bronce_medals: number;
    photoUrl: string;
  }

  export interface LoginProps {
    email: string;
    password: string;
}