import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrownDef, GreenDef, BlueDef, RedDef } from '../definitions/ColorsDef'
import { Wrapper } from '../utils/ResultWrapper'
import { NextBtn } from '../utils/Buttons'

class Colors extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showBrownDef: false,
      showGreenDef: false,
      showBlueDef: false,
      showRedDef: false,
    }
    this.onBrownDefClick = this.onBrownDefClick.bind(this)
    this.onGreenDefClick = this.onGreenDefClick.bind(this)
    this.onBlueDefClick = this.onBlueDefClick.bind(this)
    this.onRedDefClick = this.onRedDefClick.bind(this)
  }

  renderNextBtn() {
    return (
      <NextBtn onClick={this.props._onNextClick}>
        <span>Nastavite</span>
        <div className='icon'>
          <i className='fa fa-chevron-right' />
        </div>
      </NextBtn>
    )
  }

  renderBrownDef() {
    return (
      <BrownDef
        title={'Definicija Brown (Braon) tipa'}
        content={`Vi ste graditelj. Uživate u vođenju, stvaranju i napornom radu. Vi ste tradicionalna osoba koja poštuje autoritet. Vaše snage su marljivost, neposrednost i praktičnost. Vaše slabosti su nedostatak takta, strpljenja i poteškoće sa apstrakcijama.`}
        onBackClick={this.onBrownDefClick}
      />
    )
  }

  renderGreenDef() {
    return (
      <GreenDef
        title={'Definicija Green (Zelena) tipa'}
        content={`Vi ste planer. Uživate u sanjarenjima, spletkama i inovacijama. Mnogo vremena provodite razmišljajući. Vaše snage su vaša vizija, objektivnost i pažnja prema detaljima. Vaše slabosti su vaša poteškoća da se stavite u trenutni trenutak i nedostatak praktičnosti i brzine.`}
        onBackClick={this.onGreenDefClick}
      />
    )
  }

  renderBlueDef() {
    return (
      <BlueDef
        title={'Definicija Blue (Plava) tipa'}
        content={`Vi ste veza. Uživate u ćaskanju, ljubavnom druženju i druženju sa drugima. Vi ste empatična osoba koja ima tendenciju da potrebe drugih stavlja iznad svojih potreba. Vaše snage su vaša simpatija, otvorenost i svest o sopstvenim emocijama. Vaše slabosti su vaša subjektivnost, savitljivost i manipulabilnost.`}
        onBackClick={this.onBlueDefClick}
      />
    )
  }

  renderRedDef() {
    return (
      <RedDef
        title={'Definicija Red (Crvena) tipa'}
        content={`Ti si avanturista. Uživate u akciji, uzbuđenju i drami. Lako prihvatate promene i spontani ste. Vaše snage su vaša upornost, neustrašivost i prilagodljivost. Vaše slabosti su vaša nepažnja i nedostatak fokusa i marljivosti.`}
        onBackClick={this.onRedDefClick}
      />
    )
  }

  render() {
    let showBrownDef = this.state.showBrownDef
    let showGreenDef = this.state.showGreenDef
    let showBlueDef = this.state.showBlueDef
    let showRedDef = this.state.showRedDef
    if (showBrownDef) {
      return this.renderBrownDef()
    } else if (showGreenDef) {
      return this.renderGreenDef()
    } else if (showBlueDef) {
      return this.renderBlueDef()
    } else if (showRedDef) {
      return this.renderRedDef()
    }
    return (
      <Wrapper className='jumbotron'>
        <h1 className='display-3 title'>Rezultat po bojama</h1>
        <hr className='my-4' />
        <h2 className='display-6 resultTxt'>{this.props.resultColors}</h2>
        <hr className='my-5' />
        <p className='lead'>Šta znači ovaj rezultat?</p>
        <ul className='list-group'>
          <li className='list-group-item' onClick={this.onBrownDefClick}>
            Brown (Braon)
            <div className='icon'>
              <i className='fa fa-arrow-right' />
            </div>
          </li>
          <li className='list-group-item' onClick={this.onGreenDefClick}>
            Green (Zelena)
            <div className='icon'>
              <i className='fa fa-arrow-right' />
            </div>
          </li>
          <li className='list-group-item' onClick={this.onBlueDefClick}>
            Blue (Plava)
            <div className='icon'>
              <i className='fa fa-arrow-right' />
            </div>
          </li>
          <li className='list-group-item' onClick={this.onRedDefClick}>
            Red (Crvena)
            <div className='icon'>
              <i className='fa fa-arrow-right' />
            </div>
          </li>
        </ul>
        {this.renderNextBtn()}
      </Wrapper>
    )
  }

  onBrownDefClick() {
    let showBrownDef = this.state.showBrownDef
    this.setState({ showBrownDef: !showBrownDef })
  }

  onGreenDefClick() {
    let showGreenDef = this.state.showGreenDef
    this.setState({ showGreenDef: !showGreenDef })
  }

  onBlueDefClick() {
    let showBlueDef = this.state.showBlueDef
    this.setState({ showBlueDef: !showBlueDef })
  }

  onRedDefClick() {
    let showRedDef = this.state.showRedDef
    this.setState({ showRedDef: !showRedDef })
  }
}

Colors.propTypes = {
  resultColors: PropTypes.string.isRequired,
  resultBrown: PropTypes.string.isRequired,
  resultGreen: PropTypes.string.isRequired,
  resultBlue: PropTypes.string.isRequired,
  resultRed: PropTypes.string.isRequired,
}

export default Colors
