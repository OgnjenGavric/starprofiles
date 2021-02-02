import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from '../utils/ResultWrapper'
import {
  ISTJ,
  ISFJ,
  INFJ,
  INTJ,
  ISTP,
  ISFP,
  INFP,
  INTP,
  ESTP,
  ESFP,
  ENFP,
  ENTP,
  ESTJ,
  ESFJ,
  ENFJ,
  ENTJ,
} from '../definitions/BriggsDef'

class Briggs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showISTJ: false,
      showISFJ: false,
      showINFJ: false,
      showINTJ: false,
      showISTP: false,
      showISFP: false,
      showINFP: false,
      showINTP: false,
      showESTP: false,
      showESFP: false,
      showENFP: false,
      showENTP: false,
      showESTJ: false,
      showESFJ: false,
      showENFJ: false,
      showENTJ: false,
    }
    this.onISTJ_click = this.onISTJ_click.bind(this)
    this.onISFJ_click = this.onISFJ_click.bind(this)
    this.onINFJ_click = this.onINFJ_click.bind(this)
    this.onINTJ_click = this.onINTJ_click.bind(this)
    this.onISTP_click = this.onISTP_click.bind(this)
    this.onISFP_click = this.onISFP_click.bind(this)
    this.onINFP_click = this.onINFP_click.bind(this)
    this.onINTP_click = this.onINTP_click.bind(this)
    this.onESTP_click = this.onESTP_click.bind(this)
    this.onESFP_click = this.onESFP_click.bind(this)
    this.onENFP_click = this.onENFP_click.bind(this)
    this.onENTP_click = this.onENTP_click.bind(this)
    this.onESTJ_click = this.onESTJ_click.bind(this)
    this.onESFJ_click = this.onESFJ_click.bind(this)
    this.onENFJ_click = this.onENFJ_click.bind(this)
    this.onENTJ_click = this.onENTJ_click.bind(this)
  }

  renderISTJ() {
    return (
      <ISTJ
        title={'Introvert | Sensing | Thinking | Judging'}
        content={`Vi ste tip ISTJ-a, zvani "Inspektor". Težite da budete praktični i logični prije svega. Trebali biste razmotriti posao u računovodstvu ili inženjeringu.`}
        onBackClick={this.onISTJ_click}
      />
    )
  }

  renderISFJ() {
    return (
      <ISFJ
        title={'Introvert | Sensing | Feeling | Judging'}
        content={`Vi ste tip ISFJ-a, zvani "Zaštitnik". Nastojite da budete simpatični i organizovani prije svega. Trebali biste razmotriti posao u brizi o djeci ili knjigovodstvu.`}
        onBackClick={this.onISFJ_click}
      />
    )
  }

  renderINFJ() {
    return (
      <INFJ
        title={'Introvert | iNtuitive | Feeling | Judging'}
        content={`Vi ste tip INFJ-a, zvani "Savjetnik". Prije svega imate tendenciju da budete osjetljivi i kreativni. Trebali biste razmotriti posao u obrazovanju ili umjetnosti.`}
        onBackClick={this.onINFJ_click}
      />
    )
  }

  renderINTJ() {
    return (
      <INTJ
        title={'Introvert | iNtuitive | Thinking | Judging'}
        content={`Vi ste tip INTJ-a, zvani "Mastermind". Skloni ste odlučnosti i pronicljivosti prije svega. Trebali biste razmotriti posao u arhitekturi ili inženjerstvu.`}
        onBackClick={this.onINTJ_click}
      />
    )
  }

  renderISTP() {
    return (
      <ISTP
        title={'Introvert | Sensing | Thinking | Perceiving'}
        content={`Vi ste tip ISTP-a, zvani "Operator". Skloni ste analitičnosti i praktičnosti iznad svega. Trebali biste razmisliti o poslu u računarskoj tehnologiji ili poljoprivredi.`}
        onBackClick={this.onISTP_click}
      />
    )
  }

  renderISFP() {
    return (
      <ISFP
        title={'Introvert | Sensing | Feeling | Perceiving'}
        content={`Vi ste tip ISFP-a, zvani "Kompozitor". Skloni ste lojalnosti i prilagodljivosti iznad svega. Trebali biste razmotriti posao u nastavi ili njezi.`}
        onBackClick={this.onISFP_click}
      />
    )
  }

  renderINFP() {
    return (
      <INFP
        title={'Introvert | iNtuitive | Feeling | Perceiving'}
        content={`Vi ste tip INFP-a, zvani "Iscelitelj". Skloni ste empatiji i radoznalosti iznad svega. Trebali biste razmotriti posao pisanja ili grafičkog dizajna.`}
        onBackClick={this.onINFP_click}
      />
    )
  }

  renderINTP() {
    return (
      <INTP
        title={'Introvert | iNtuitive | Thinking | Perceiving'}
        content={`Vi ste tip INTP-a, zvani "Arhitekta". Prije svega ste skloni radoznalosti i analitičnosti. Trebali biste razmotriti posao u arhitekturi ili građevinarstvu.`}
        onBackClick={this.onINTP_click}
      />
    )
  }

  renderESTP() {
    return (
      <ESTP
        title={'Extravert | Sensing | Thinking | Perceiving'}
        content={`Vi ste tip ESTP-a, zvani "Promoter". Prije svega imate tendenciju da budete energični i realni. Trebali biste razmotriti posao u prodaji ili šumarstvu.`}
        onBackClick={this.onESTP_click}
      />
    )
  }

  renderESFP() {
    return (
      <ESFP
        title={'Extravert | Sensing | Feeling | Perceiving'}
        content={`Vi ste tip ESFP-a, zvani "Izvođač". Skloni ste brizi i snalažljivosti iznad svega. Trebali biste razmotriti posao u ugostiteljstvu ili zdravstvu.`}
        onBackClick={this.onESFP_click}
      />
    )
  }

  renderENFP() {
    return (
      <ENFP
        title={'Extravert | iNtuitive | Feeling | Perceiving'}
        content={`Vi ste tip ENFP-a, zvani "Šampion". Prije svega imate tendenciju da budete maštoviti i pronicljivi. Trebali biste razmotriti posao u terapiji ili glumi.`}
        onBackClick={this.onENFP_click}
      />
    )
  }

  renderENTP() {
    return (
      <ENTP
        title={'Extravert | iNtuitive | Thinking | Perceiving'}
        content={`Vi ste tip ENTP-a, zvani "Izumitelj". Skloni ste entuzijazmu i teoriji iznad svega. Trebali biste razmotriti posao u građevinarstvu ili sportu.`}
        onBackClick={this.onENTP_click}
      />
    )
  }

  renderESTJ() {
    return (
      <ESTJ
        title={'Extravert | Sensing | Thinking | Judging'}
        content={`Vi ste tip ESTJ-a, zvani "Supervizor". Prije svega imate tendenciju da budete logični i asertivni. Trebali biste razmotriti posao lidera ili u zakonodavstvu.`}
        onBackClick={this.onESTJ_click}
      />
    )
  }

  renderESFJ() {
    return (
      <ESFJ
        title={'Extravert | Sensing | Feeling | Judging'}
        content={`Vi ste tip ESFJ-a, zvani "Provajder". Skloni ste druženju i brizi iznad svega. Trebali biste razmotriti posao u njezi djeteta ili zdravstvu.`}
        onBackClick={this.onESFJ_click}
      />
    )
  }

  renderENFJ() {
    return (
      <ENFJ
        title={'Extravert | iNtuitive | Feeling | Judging'}
        content={`Vi ste tip ENFJ-a, zvani "Učitelj". Prije svega imate tendenciju da budete strastveni i maštoviti. Trebali biste razmisliti o poslu u nastavi ili umjetnosti.`}
        onBackClick={this.onENFJ_click}
      />
    )
  }

  renderENTJ() {
    return (
      <ENTJ
        title={'Extravert | iNtuitive | Thinking | Judging'}
        content={`Vi ste tip ENTJ-a, zvani "Maršal". Prije svega imate tendenciju da budete organizovani i logični. Trebali biste razmotriti posao u zakonu ili inženjerstvu.`}
        onBackClick={this.onENTJ_click}
      />
    )
  }

  render() {
    let showISTJ = this.state.showISTJ
    let showISFJ = this.state.showISFJ
    let showINFJ = this.state.showINFJ
    let showINTJ = this.state.showINTJ
    let showISTP = this.state.showISTP
    let showISFP = this.state.showISFP
    let showINFP = this.state.showINFP
    let showINTP = this.state.showINTP
    let showESTP = this.state.showESTP
    let showESFP = this.state.showESFP
    let showENFP = this.state.showENFP
    let showENTP = this.state.showENTP
    let showESTJ = this.state.showESTJ
    let showESFJ = this.state.showESFJ
    let showENFJ = this.state.showENFJ
    let showENTJ = this.state.showENTJ
    if (showISTJ) {
      return this.renderISTJ()
    } else if (showISFJ) {
      return this.renderISFJ()
    } else if (showINFJ) {
      return this.renderINFJ()
    } else if (showINTJ) {
      return this.renderINTJ()
    } else if (showISTP) {
      return this.renderISTP()
    } else if (showISFP) {
      return this.renderISFP()
    } else if (showINFP) {
      return this.renderINFP()
    } else if (showINTP) {
      return this.renderINTP()
    } else if (showESTP) {
      return this.renderESTP()
    } else if (showESFP) {
      return this.renderESFP()
    } else if (showENFP) {
      return this.renderENFP()
    } else if (showENTP) {
      return this.renderENTP()
    } else if (showESTJ) {
      return this.renderESTJ()
    } else if (showESFJ) {
      return this.renderESFJ()
    } else if (showENFJ) {
      return this.renderENFJ()
    } else if (showENTJ) {
      return this.renderENTJ()
    }
    return (
      <Wrapper>
        <h1 className='display-3 title'>Vaš rezultat</h1>
        <hr className='my-4' />
        <h2 className='display-6 resultTxt'>{this.props.resultBriggs}</h2>
        <hr className='my-5' />
        <p className='lead'>Šta znači ovaj rezultat?</p>
        <ul className='list-group briggs'>
          <li className='list-group-item' onClick={this.onISTJ_click}>
            ISTJ
          </li>
          <li className='list-group-item' onClick={this.onISFJ_click}>
            ISFJ
          </li>
          <li className='list-group-item' onClick={this.onINFJ_click}>
            INFJ
          </li>
          <li className='list-group-item' onClick={this.onINTJ_click}>
            INTJ
          </li>
        </ul>
        <ul className='list-group briggs'>
          <li className='list-group-item' onClick={this.onISTP_click}>
            ISTP
          </li>
          <li className='list-group-item' onClick={this.onISFP_click}>
            ISFP
          </li>
          <li className='list-group-item' onClick={this.onINFP_click}>
            INFP
          </li>
          <li className='list-group-item' onClick={this.onINTP_click}>
            INTP
          </li>
        </ul>
        <ul className='list-group briggs'>
          <li className='list-group-item' onClick={this.onESTP_click}>
            ESTP
          </li>
          <li className='list-group-item' onClick={this.onESFP_click}>
            ESFP
          </li>
          <li className='list-group-item' onClick={this.onENFP_click}>
            ENFP
          </li>
          <li className='list-group-item' onClick={this.onENTP_click}>
            ENTP
          </li>
        </ul>
        <ul className='list-group briggs'>
          <li className='list-group-item' onClick={this.onESTJ_click}>
            ESTJ
          </li>
          <li className='list-group-item' onClick={this.onESFJ_click}>
            ESFJ
          </li>
          <li className='list-group-item' onClick={this.onENFJ_click}>
            ENFJ
          </li>
          <li className='list-group-item' onClick={this.onENTJ_click}>
            ENTJ
          </li>
        </ul>
      </Wrapper>
    )
  }

  onISTJ_click() {
    let showISTJ = this.state.showISTJ
    this.setState({ showISTJ: !showISTJ })
  }

  onISFJ_click() {
    let showISFJ = this.state.showISFJ
    this.setState({ showISFJ: !showISFJ })
  }

  onINFJ_click() {
    let showINFJ = this.state.showINFJ
    this.setState({ showINFJ: !showINFJ })
  }

  onINTJ_click() {
    let showINTJ = this.state.showINTJ
    this.setState({ showINTJ: !showINTJ })
  }

  onISTP_click() {
    let showISTP = this.state.showISTP
    this.setState({ showISTP: !showISTP })
  }

  onISFP_click() {
    let showISFP = this.state.showISFP
    this.setState({ showISFP: !showISFP })
  }

  onINFP_click() {
    let showINFP = this.state.showINFP
    this.setState({ showINFP: !showINFP })
  }

  onINTP_click() {
    let showINTP = this.state.showINTP
    this.setState({ showINTP: !showINTP })
  }

  onESTP_click() {
    let showESTP = this.state.showESTP
    this.setState({ showESTP: !showESTP })
  }

  onESFP_click() {
    let showESFP = this.state.showESFP
    this.setState({ showESFP: !showESFP })
  }

  onENFP_click() {
    let showENFP = this.state.showENFP
    this.setState({ showENFP: !showENFP })
  }

  onENTP_click() {
    let showENTP = this.state.showENTP
    this.setState({ showENTP: !showENTP })
  }

  onESTJ_click() {
    let showESTJ = this.state.showESTJ
    this.setState({ showESTJ: !showESTJ })
  }

  onESFJ_click() {
    let showESFJ = this.state.showESFJ
    this.setState({ showESFJ: !showESFJ })
  }

  onENFJ_click() {
    let showENFJ = this.state.showENFJ
    this.setState({ showENFJ: !showENFJ })
  }

  onENTJ_click() {
    let showENTJ = this.state.showENTJ
    this.setState({ showENTJ: !showENTJ })
  }
}

Briggs.propTypes = {
  resultBriggs: PropTypes.string.isRequired,
}

export default Briggs
