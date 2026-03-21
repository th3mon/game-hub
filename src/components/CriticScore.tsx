import { Badge } from "@chakra-ui/react";
import "./CriticScore.css";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const scoreClassName =
    score > 75
      ? "critic-score critic-score--great"
      : score > 60
        ? "critic-score critic-score--good"
        : "critic-score critic-score--poor";

  return (
    <Badge
      className={scoreClassName}
      fontSize={14}
      padding={2}
      borderRadius={4}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
