import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import GridCard from "../../layout/GridCard";
import { IResCardData } from "../../redux/models/cardDB.model";
import useAudioPlayer from "../../hooks/useMusicPlayer";
import catalogMusic from "../../../public/sound/deck-construction.mp3";
import { Link } from "react-router-dom";
import InputSearch from "../../shared/ui/inputSearch";
import AutoGrid from "../../shared/containers/AutoGrid";
import SectionLayout from "../../layout/SectionLayout";

export default function Catalog() {
  const { data } = useLoaderData() as IResCardData;
  const { setAudio, playMusic, restartAudioPlayer } = useAudioPlayer();
  const searchBarClassName =
    "justify-self-end bg-white/80 backdrop-blur-sm sticky top-0 py-8 z-20 w-full";

  useEffect(() => {
    setAudio(catalogMusic);
    playMusic();

    return () => restartAudioPlayer();
  }, []);

  return (
    <SectionLayout title="catalog">
      <div>
        <InputSearch customClass={searchBarClassName} />
        <AutoGrid>
          {data.map(({ card_images, id, name, type }) => (
            <Link to={`${id}`} key={id}>
              <GridCard title={name} image={card_images[0].image_url_small} />
            </Link>
          ))}
        </AutoGrid>
      </div>
    </SectionLayout>
  );
}
