import { Button } from "@components/loading/button/Button";
import { Container, Slogan, Title } from "./signInStyles";
import backGroundImage from "@assets/background.png";

export default function signIn() {
  return (
    <Container source={backGroundImage}>
      <Title>FleetCar</Title>

      <Slogan>Gestão de uso de veículos</Slogan>
      <Button title="Entrar com Google" />
    </Container>
  );
}
