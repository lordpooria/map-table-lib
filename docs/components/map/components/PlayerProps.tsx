import { useTDStoreActions } from "@hesaba/map";
import BaseMap from "./BaseMap";

const INITIAL_SPEED = 20;

const BackwardButton = () => {
  const previousTime = useTDStoreActions((actions) => actions.previousTime);

  return (
    <button onClick={() => previousTime({ numSteps: 1, loop: false })}>
      back
    </button>
  );
};

export const AutoPlayAndReload = () => {
  return <BaseMap playerProps={{ loop: true, autoPlay: true }} />;
};

export const SliderAndSpeedsProps = () => {
  return (
    <BaseMap
      playerProps={{
        timeSteps: 2,
        speedStep: 5,
        minSpeed: 1,
        maxSpeed: 100,
        transitionTime: 1000 / INITIAL_SPEED,
      }}
    />
  );
};

export const PlayerCustomButtonComponents = () => (
  <BaseMap
    playerProps={{
      backwardButton: BackwardButton,
    }}
  />
);

export const PlayerAddRemoveComponents = () => (
  <BaseMap
    playerProps={{
      speedIcon: false,
      forwardButton: false,
      speedSlider: false,
      playReverseButton: true,
    }}
  />
);
