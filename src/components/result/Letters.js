import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from '../utils/ResultWrapper'
import { LetterA, LetterB, LetterC, LetterD } from '../definitions/LettersDef'
import { NextBtn } from '../utils/Buttons'

class Letters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLetterA: false,
      showLetterB: false,
      showLetterC: false,
      showLetterD: false,
    }
    this.onLetterA_Click = this.onLetterA_Click.bind(this)
    this.onLetterB_Click = this.onLetterB_Click.bind(this)
    this.onLetterC_Click = this.onLetterC_Click.bind(this)
    this.onLetterD_Click = this.onLetterD_Click.bind(this)
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

  renderLetterA() {
    return (
      <LetterA
        title={'Ličnost tipa A:'}
        content={`Vi ste ličnost tipa A. Volite da kontrolišete sve. Vaše snage su vaša upornost, samopouzdanje i praktičnost. Vaše slabosti su nedostatak empatije, discipline i svesti o detaljima.`}
        onBackClick={this.onLetterA_Click}
      />
    )
  }

  renderLetterB() {
    return (
      <LetterB
        title={'Ličnost tipa B:'}
        content={`Vi ste ličnost tipa B. Volite biti u blizini ljudi. Vaše snage su vaša empatija, entuzijazam i spontanost. Vaše slabosti su nedostatak strpljenja, pažnje i samopouzdanja.`}
        onBackClick={this.onLetterB_Click}
      />
    )
  }

  renderLetterC() {
    return (
      <LetterC
        title={'Ličnost tipa C:'}
        content={`Vi ste ličnost tipa C. Volite da razmislite o stvarima. Vaše snage su vaša racionalnost, objektivnost i originalnost. Vaše slabosti su nedostatak spontanosti, praktičnosti i empatije.`}
        onBackClick={this.onLetterC_Click}
      />
    )
  }

  renderLetterD() {
    return (
      <LetterD
        title={'Ličnost tipa D:'}
        content={`Vi ste ličnost tipa D. Volite da se osjećate sigurno u životu. Vaše snage su vaša organizacija, saosjećanje i strpljenje. Vaše slabosti su nedostatak ambicije, prilagodljivosti i asertivnosti.`}
        onBackClick={this.onLetterD_Click}
      />
    )
  }

  render() {
    let showLetterA = this.state.showLetterA
    let showLetterB = this.state.showLetterB
    let showLetterC = this.state.showLetterC
    let showLetterD = this.state.showLetterD
    if (showLetterA) {
      return this.renderLetterA()
    } else if (showLetterB) {
      return this.renderLetterB()
    } else if (showLetterC) {
      return this.renderLetterC()
    } else if (showLetterD) {
      return this.renderLetterD()
    }
    return (
      <Wrapper>
        <h1 className='display-3 title'>Rezultat po slovu:</h1>
        <hr className='my-4' />
        <h2 className='display-6 resultTxt'>{this.props.resultLetters}</h2>
        <hr className='my-5' />
        <p className='lead'>Šta znači ovaj rezultat?</p>
        <ul className='list-group'>
          <li className='list-group-item' onClick={this.onLetterA_Click}>
            Slovo A
            <div className='icon'>
              <i className='fa fa-arrow-right' />
            </div>
          </li>
          <li className='list-group-item' onClick={this.onLetterB_Click}>
            Slovo B
            <div className='icon'>
              <i className='fa fa-arrow-right' />
            </div>
          </li>
          <li className='list-group-item' onClick={this.onLetterC_Click}>
            Slovo C
            <div className='icon'>
              <i className='fa fa-arrow-right' />
            </div>
          </li>
          <li className='list-group-item' onClick={this.onLetterD_Click}>
            Slovo D
            <div className='icon'>
              <i className='fa fa-arrow-right' />
            </div>
          </li>
        </ul>
        {this.renderNextBtn()}
      </Wrapper>
    )
  }

  onLetterA_Click() {
    let showLetterA = this.state.showLetterA
    this.setState({ showLetterA: !showLetterA })
  }

  onLetterB_Click() {
    let showLetterB = this.state.showLetterB
    this.setState({ showLetterB: !showLetterB })
  }

  onLetterC_Click() {
    let showLetterC = this.state.showLetterC
    this.setState({ showLetterC: !showLetterC })
  }

  onLetterD_Click() {
    let showLetterD = this.state.showLetterD
    this.setState({ showLetterD: !showLetterD })
  }
}

Letters.propTypes = {
  resultLetters: PropTypes.string.isRequired,
}

export default Letters
