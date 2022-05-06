import image from "../../images/loading.gif";
import { ContainerLoading } from "./Loading.style";

export default function Loading() {
  return (
    <ContainerLoading>
      <img src={image} alt="loading" />
    </ContainerLoading>
  );
}