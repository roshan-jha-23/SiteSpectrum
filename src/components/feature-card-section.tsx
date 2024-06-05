import React from "react";
import { FeatureCard1 } from "./feature-cards/feature-card-1";
import { FeatureCard2 } from "./feature-cards/feature-card-2";
import { FeatureCard3 } from "./feature-cards/feature-card-3";

const FeatureCardSection = () => {
  return (
    <div className="flex gap-3 items-center justify-center py-20">
      <FeatureCard1 />
      <FeatureCard2 />
      <FeatureCard3 />
    </div>
  );
};

export default FeatureCardSection;
