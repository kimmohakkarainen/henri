import React from "react";
import {
  Grid,
  FormGroup,
  ControlLabel,
  Radio,
  Alert,
  ToggleButton,
  ToggleButtonGroup,
  Badge,
  ProgressBar,
  Label,
  ListGroup,
  ListGroupItem,
  FormControl,
  InputGroup,
  DropdownButton,
  MenuItem,
  Checkbox
} from "react-bootstrap";

class TyosopimusView extends React.Component {
  constructor(props, path) {
    super(props);
    this.state = {
      hlotunnusValidation: "error"
    };

    this.handleHloTunnus = this.handleHloTunnus.bind(this);
  }

  handleHloTunnus(e) {
    if (
      e.target.value.match(
        /[0-9][0-9][0-9][0-9][0-9][0-9][A\+\-][0-9][0-9][0-9][0-9]/g
      )
    ) {
      this.setState({ hlotunnusValidation: "ok" });
    } else {
      this.setState({ hlotunnusValidation: "error" });
    }
  }

  render() {
    return (
      <Grid>
        <h1>työsopimus</h1>
        <form>
          <ListGroup>
            <ListGroupItem header="työnantaja">
              <FormControl type="text" placeholder="Työnantajan nimi" />
            </ListGroupItem>
            <ListGroupItem header="työnantajan koti- tai liikepaikka" href="#">
              <FormControl type="text" placeholder="Työnantajan osoite" />
            </ListGroupItem>
            <ListGroupItem header="Työntekijä" href="#">
              <FormControl type="text" placeholder="Työntekijän nimi" />
              <FormGroup
                controlId="formValidationError1"
                validationState={this.state.hlotunnusValidation}
              >
                <ControlLabel>Henkilötunnus</ControlLabel>
                <FormControl type="text" onChange={this.handleHloTunnus} />
              </FormGroup>
            </ListGroupItem>
            <FormGroup>
              <ListGroupItem header="Osoite" href="#">
                <FormControl type="text" placeholder="Työntekijän osoite" />
              </ListGroupItem>
              <FormGroup
                controlId="formControlsSelect"
                validationState={this.state.hlotunnusValidation}
              />

              <ControlLabel />
              <FormGroup>
                <FormControl componentClass="select" placeholder="select">
                  <option value="select">
                    Toistaiseksi voimassa oleva työsopimus
                  </option>
                  <option value="other">Määräaikainen työsopimus</option>
                </FormControl>
              </FormGroup>
            </FormGroup>
            <FormGroup validationState={this.state.hlotunnusValidation}>
              <ListGroupItem header="työnteon alkamisajankohta" href="#">
                <FormControl type="text" placeholder="Aika" />
              </ListGroupItem>
            </FormGroup>
            <ListGroupItem
              header="Määräaikaisen työsopimuksen peruste"
              href="#"
            >
              <FormGroup validationState={this.state.hlotunnusValidation}>
                <FormControl type="text" placeholder="Peruste" />
              </FormGroup>
            </ListGroupItem>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Työsuhteessa noudatettava koeaika</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="eikoea">Ei koeaikaa</option>
                <option value="koe1kk">1kk</option>
                <option value="other">2kk</option>
                <option value="other">3kk</option>
                <option value="other">4kk</option>
                <option value="other">5kk</option>
                <option value="other">6kk</option>
              </FormControl>
            </FormGroup>

            <ListGroupItem header="Määräaikaisen työsopimuksen kesto" href="#">
              <FormGroup validationState={this.state.hlotunnusValidation}>
                <FormControl type="text" placeholder="Aika" />
              </FormGroup>
            </ListGroupItem>
            <ListGroupItem
              header="työn tekopaikka tai selvitys niistä periaatteista, joiden mukaan työntekijä työskentelee eri kohteissa"
              href="#"
            >
              {" "}
              <FormGroup validationState={this.state.hlotunnusValidation}>
                <FormControl type="text" placeholder="osoite" />
              </FormGroup>
            </ListGroupItem>
          </ListGroup>
          <ListGroupItem header="Pääasialliset työtehtävät" href="#">
            <FormGroup validationState={this.state.hlotunnusValidation}>
              <FormControl type="text" placeholder="Perustele" />
            </FormGroup>
          </ListGroupItem>
          <ListGroupItem header="Sovellettava työehtosopimus" href="#">
            <FormGroup validationState={this.state.hlotunnusValidation}>
              <FormControl type="text" placeholder="Perustele" />
            </FormGroup>
          </ListGroupItem>
          <ListGroupItem
            header="Työstä maksettava palkka ja muu vastike"
            href="#"
          >
            <FormGroup validationState={this.state.hlotunnusValidation}>
              <FormControl type="text" placeholder="palkka" />
            </FormGroup>
          </ListGroupItem>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Palkan määräytymisen peruste</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="eikoea">Aikaperuste</option>
              <option value="koe1kk">Suoritusperuste</option>
              <option value="other">Muu</option>
            </FormControl>
          </FormGroup>
          <ListGroupItem header="palkka työsuhteen alussa" href="#">
            <FormGroup validationState={this.state.hlotunnusValidation}>
              <FormControl type="text" placeholder="palkka" />
            </FormGroup>
          </ListGroupItem>
          <FormGroup validationState={this.state.hlotunnusValidation}>
            <ControlLabel>Luontoisedut</ControlLabel>
            <InputGroup>
              <FormControl type="text" />
              <DropdownButton
                componentClass={InputGroup.Button}
                id="input-dropdown-addon"
                title="ja niiden raha-arvo"
              >
                <MenuItem key="1">Verotusarvo</MenuItem>
                <MenuItem key="5">Muu</MenuItem>
              </DropdownButton>
            </InputGroup>
          </FormGroup>

          <ListGroupItem header="Palkanmaksukausi" href="#">
            <FormGroup validationState={this.state.hlotunnusValidation}>
              <FormControl type="text" placeholder="Perustele" />
            </FormGroup>
          </ListGroupItem>
          <ListGroupItem header="Palkanmaksupäivät" href="#">
            <FormGroup validationState={this.state.hlotunnusValidation}>
              <FormControl type="text" placeholder="Perustele" />
            </FormGroup>
          </ListGroupItem>
          <ListGroupItem header="Palkka maksetaan tilille" href="#">
            <FormGroup validationState={this.state.hlotunnusValidation}>
              <FormControl type="text" placeholder="Perustele" />
            </FormGroup>
          </ListGroupItem>
          <ControlLabel>Työaika</ControlLabel>
          <InputGroup>
            <FormControl type="text" />
            <DropdownButton
              componentClass={InputGroup.Button}
              id="input-dropdown-addon"
              title=""
            >
              <MenuItem key="1">h/vrk</MenuItem>
              <MenuItem key="2">h/vk</MenuItem>
              <MenuItem key="3">h/2vk</MenuItem>
              <MenuItem key="4">h/3vk</MenuItem>
            </DropdownButton>
          </InputGroup>
          <ListGroupItem header="Vuosiloma" href="#">
            <FormGroup validationState={this.state.hlotunnusValidation}>
              <FormControl type="text" placeholder="Perustele" />
            </FormGroup>
          </ListGroupItem>
          <ControlLabel>Irtisanomisaika määräytyy</ControlLabel>
          <FormGroup>
            <Checkbox inline>Lain mukaan</Checkbox>
            <Checkbox inline>työnantajan irtisanoessa työsopimuksen</Checkbox>
          </FormGroup>
          <FormGroup>
            <Checkbox inline>työehtosopimuksen mukaan</Checkbox>{" "}
            <Checkbox inline>työntekijän irtisanoessa työsopimuksen</Checkbox>
            <FormControl type="text" placeholder="" width="" />
          </FormGroup>
          <FormGroup inline>
            <ControlLabel>Paikka</ControlLabel>
            <FormControl type="text" placeholder="" width="" />
            <ControlLabel>Aika</ControlLabel>
            <FormControl type="text" placeholder="" width="" />
            <ControlLabel>työnantajan allekirjoitus</ControlLabel>
            <FormControl type="text" placeholder="" width="" />
            <ControlLabel>työntekijän allekirjoitus</ControlLabel>
            <FormControl type="text" placeholder="" width="" />
          </FormGroup>
        </form>
      </Grid>
    );
  }
}

export default TyosopimusView;
