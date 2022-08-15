//ShowImageAgain

import localImageDiamondMoon from "../images/CapA2.jpg";

let simpleMessage = `Captain America is a fictional superhero from the Marvel Comics. He made his first appearance in the comic book Captain America Comics #1 in 1941. He wears a suit that has a white star on his chest with 2 stripes (still white) on each side next to the star. His suit is blue. He also has an indestructible shield with a bullseye and a star on the front of it. He is also known as his alter ego Steve Rogers. Captain America had a sidekick (friend), Bucky who later became the Winter Soldier, is a very good fighter, both hand-to-hand and using his guns to take care of his enemies easily. Captain America has an nemesis called Red Skull. He later joins a team called the Avengers to help protect the world.`

const ShowImageAgain = () => (
    <div className="text-center hero my-5">
        <p>{simpleMessage}</p>
        {/* <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" /> */}
        {/* <h1 className="mb-4">{string1}</h1>    */}
        <img src={localImageDiamondMoon} className="img-fluid" alt="..."></img>
        <p>

        </p>
        <p>
        Captain America was the first Marvel Comics character to appear in media outside comics with the release of the 1944 movie serial, Captain America. Since then, the character has been featured in other films and television series. In the Marvel Cinematic Universe, Steve Rogers was portrayed by Chris Evans. Captain America was ranked sixth on IGN's "Top 100 Comic Book Heroes of All Time" in 2011, second in their list of "The Top 50 Avengers" in 2012,and second in their "Top 25 best Marvel superheroes" list in 2014.
        </p>
        <p>
          -*-
        </p>
  </div>
);

export default ShowImageAgain;