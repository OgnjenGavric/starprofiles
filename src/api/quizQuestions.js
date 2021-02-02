// briggs: EI, SN, TF, JP
// color: brown, green, blue, red
// letter: a, b, c, d
var quizQuestions = [
  // question #1
  {
    question: 'Orijentisan sam na zadatke kako bih postigao određene ciljeve.',
    answers: [
      {
        // briggs, color, letter
        type: 'J,Brown,D',
        content: 'DA!',
      },
      {
        type: 'J,Brown,D,No',
        content: 'NE!',
      },
    ],
  },
  // question #2
  {
    question: 'Lako mi dosadi kada razgovaram o apstraktnim konceptima.',
    answers: [
      {
        // briggs, color, letter
        type: 'N,Green,C',
        content: 'DA!',
      },
      {
        type: 'N,Green,C,No',
        content: 'NE!',
      },
    ],
  },
  // question #3
  {
    question: 'Volim da samostalno isprobam stvari.',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Red,A',
        content: 'DA!',
      },
      {
        type: 'S,Red,A,No',
        content: 'NE!',
      },
    ],
  },
  // question #4
  {
    question: 'Volim da znam kuda idem prije nego što izađem iz kuće.',
    answers: [
      {
        // briggs, color, letter
        type: 'J,Brown,D',
        content: 'DA!',
      },
      {
        type: 'J,Brown,D,No',
        content: 'NE!',
      },
    ],
  },
  // question #5
  {
    question: 'Vjerujem da za sve postoji logično objašnjenje.',
    answers: [
      {
        // briggs, color, letter
        type: 'T,Brown,C',
        content: 'DA!',
      },
      {
        type: 'T,Brown,C,No',
        content: 'NE!',
      },
    ],
  },
  // question #6
  {
    question: 'Težim da svoj društveni krug držim malim.',
    answers: [
      {
        // briggs, color, letter
        type: 'I,Green,C',
        content: 'DA!',
      },
      {
        type: 'I,Green,C,No',
        content: 'NE!',
      },
    ],
  },
  // question #7
  {
    question: 'Volim da svoje ideje podijelim sa drugima.',
    answers: [
      {
        // briggs, color, letter
        type: 'E,Blue,B',
        content: 'DA!',
      },
      {
        type: 'E,Blue,B,No',
        content: 'NE!',
      },
    ],
  },
  // question #8
  {
    question: 'Uživam u korišćenju društvenih medija.',
    answers: [
      {
        // briggs, color, letter
        type: 'E,Blue,B',
        content: 'DA!',
      },
      {
        type: 'E,Blue,B,No',
        content: 'NE!',
      },
    ],
  },
  // question #9
  {
    question: 'Uvek izražavam zabrinutost za druge kada donosim odluke.',
    answers: [
      {
        // briggs, color, letter
        type: 'F,Blue,B',
        content: 'DA!',
      },
      {
        type: 'F,Blue,B,No',
        content: 'NE!',
      },
    ],
  },
  // question #10
  {
    question: 'Volim da isprobam nove stvari.',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Red,A',
        content: 'DA!',
      },
      {
        type: 'P,Red,A,No',
        content: 'NE!',
      },
    ],
  },
  // question #11
  {
    question: 'Mogu se lako prilagoditi promjeni odluke.',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Red,A',
        content: 'DA!',
      },
      {
        type: 'P,Red,A,No',
        content: 'NE!',
      },
    ],
  },
  // question #12
  {
    question:
      'Rješavam probleme prolazeći kroz činjenice dok ne shvatim problem.',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Brown,C',
        content: 'DA!',
      },
      {
        type: 'S,Brown,C,No',
        content: 'NE!',
      },
    ],
  },
  // question #13
  {
    question:
      'Prilikom donošenja odluke oslanjam se na logiku, a ne na intuiciju.',
    answers: [
      {
        // briggs, color, letter
        type: 'T,Green,C',
        content: 'DA!',
      },
      {
        type: 'T,Green,C,No',
        content: 'NE!',
      },
    ],
  },
  // question #14
  {
    question: 'Odluke donosim srcem.',
    answers: [
      {
        // briggs, color, letter
        type: 'F,Blue,B',
        content: 'DA!',
      },
      {
        type: 'F,Blue,B,No',
        content: 'NE!',
      },
    ],
  },
  // question #15
  {
    question: 'Najbolje učim gledajući uputstva korak po korak.',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Brown,D',
        content: 'DA!',
      },
      {
        type: 'S,Brown,D,No',
        content: 'NE!',
      },
    ],
  },
  // question #16
  {
    question:
      'Ponekad pređem na drugi zadatak prije nego što završim svoj trenutni.',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Red,A',
        content: 'DA!',
      },
      {
        type: 'P,Red,A,No',
        content: 'NE!',
      },
    ],
  },
  // question #17
  {
    question: 'Više volim fleksibilan i spontan način života.',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Red,A',
        content: 'DA!',
      },
      {
        type: 'P,Red,A,No',
        content: 'NE!',
      },
    ],
  },
  // question #18
  {
    question: 'Volim da držim otvorene opcije prilikom donošenja odluka.',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Green,D',
        content: 'DA!',
      },
      {
        type: 'P,Green,D,No',
        content: 'NE!',
      },
    ],
  },
  // question #19
  {
    question: 'Osjećam se prijatno u gužvi.',
    answers: [
      {
        // briggs, color, letter
        type: 'E,Blue,B',
        content: 'DA!',
      },
      {
        type: 'E,Blue,B,No',
        content: 'NE!',
      },
    ],
  },
  // question #20
  {
    question: 'Volim da podjelim svoja osjećanja sa drugima.',
    answers: [
      {
        // briggs, color, letter
        type: 'E,Blue,B',
        content: 'DA!',
      },
      {
        type: 'E,Blue,B,No',
        content: 'NE!',
      },
    ],
  },
  // question #21
  {
    question:
      'Više volim da počnem da radim odmah, nego da provodim vrijeme praveći plan.',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Brown,A',
        content: 'DA!',
      },
      {
        type: 'S,Brown,A,No',
        content: 'NE!',
      },
    ],
  },
  // question #22
  {
    question: 'Znam svoje prioritete.',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Brown,A',
        content: 'DA!',
      },
      {
        type: 'S,Brown,A,No',
        content: 'NE!',
      },
    ],
  },
  // question #23
  {
    question: 'Težim da samostalno radim.',
    answers: [
      {
        // briggs, color, letter
        type: 'I,Green,D',
        content: 'DA!',
      },
      {
        type: 'I,Green,D,No',
        content: 'NE!',
      },
    ],
  },
  // question #24
  {
    question: 'Ne volim da idem na zabave.',
    answers: [
      {
        // briggs, color, letter
        type: 'I,Green,C',
        content: 'DA!',
      },
      {
        type: 'I,Green,C,No',
        content: 'NE!',
      },
    ],
  },
  // question #25
  {
    question: 'U skladu sam sa sopstvenim emocijama i neka me vode u životu.',
    answers: [
      {
        // briggs, color, letter
        type: 'F,Blue,B',
        content: 'DA!',
      },
      {
        type: 'F,Blue,B,No',
        content: 'NE!',
      },
    ],
  },
  // question #26
  {
    question:
      'Oslanjam se na svoju intuiciju i iskustvo, više nego na činjenice.',
    answers: [
      {
        // briggs, color, letter
        type: 'N,Red,A',
        content: 'DA!',
      },
      {
        type: 'N,Red,A,No',
        content: 'NE!',
      },
    ],
  },
  // question #27
  {
    question: 'Volim da razmislim o stvarima.',
    answers: [
      {
        // briggs, color, letter
        type: 'T,Green,D',
        content: 'DA!',
      },
      {
        type: 'T,Green,D,No',
        content: 'NE!',
      },
    ],
  },
  // question #28
  {
    question: 'Ja sam vizuelni učenik.',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Red,A',
        content: 'DA!',
      },
      {
        type: 'S,Red,A,No',
        content: 'NE!',
      },
    ],
  },
  // question #29
  {
    question: 'Dobro razmislim prije nego što donesem odluku.',
    answers: [
      {
        // briggs, color, letter
        type: 'J,Brown,D',
        content: 'DA!',
      },
      {
        type: 'J,Brown,D,No',
        content: 'NE!',
      },
    ],
  },
  // question #30
  {
    question:
      'Osjećam se nelagodno ako moji postupci naruše harmoniju u mom društvenom krugu.',
    answers: [
      {
        // briggs, color, letter
        type: 'F,Blue,B',
        content: 'DA!',
      },
      {
        type: 'F,Blue,B,No',
        content: 'NE!',
      },
    ],
  },
  // question #31
  {
    question:
      'Svoja lična mišljenja ostavljam po strani u potrazi za pravičnošću i pravdom.',
    answers: [
      {
        // briggs, color, letter
        type: 'T,Brown,C',
        content: 'DA!',
      },
      {
        type: 'T,Brown,C,No',
        content: 'NE!',
      },
    ],
  },
  // question #32
  {
    question: 'Obično sjedim u zadnjem dijelu ili u uglu sobe.',
    answers: [
      {
        // briggs, color, letter
        type: 'I,Green,C',
        content: 'DA!',
      },
      {
        type: 'I,Green,C,No',
        content: 'NE!',
      },
    ],
  },
  // question #33
  {
    question: 'Volim da budem u centru pažnje.',
    answers: [
      {
        // briggs, color, letter
        type: 'E,Red,B',
        content: 'DA!',
      },
      {
        type: 'E,Red,B,No',
        content: 'NE!',
      },
    ],
  },
  // question #34
  {
    question: 'Rješavam probleme skačući između različitih ideja i mogućnosti.',
    answers: [
      {
        // briggs, color, letter
        type: 'N,Green,C',
        content: 'DA!',
      },
      {
        type: 'N,Green,C,No',
        content: 'NE!',
      },
    ],
  },
  // question #35
  {
    question: 'Volim da dovršim posao prije igranja.',
    answers: [
      {
        // briggs, color, letter
        type: 'J,Red,D',
        content: 'DA!',
      },
      {
        type: 'J,Red,D,No',
        content: 'NE!',
      },
    ],
  },
  // question #36
  {
    question:
      'Ne dozvoljavam drugim ljudima da utiču na moje misli ili postupke.',
    answers: [
      {
        // briggs, color, letter
        type: 'T,Red,A',
        content: 'DA!',
      },
      {
        type: 'T,Red,A,No',
        content: 'NE!',
      },
    ],
  },
  // question #37
  {
    question: 'Koristim čulo mirisa kako bih se sjetio uspomena.',
    answers: [
      {
        // briggs, color, letter
        type: 'N,Blue,D',
        content: 'DA!',
      },
      {
        type: 'N,Blue,D,No',
        content: 'NE!',
      },
    ],
  },
  // question #38
  {
    question: 'Odluke donosim na osnovu svojih osjećanja.',
    answers: [
      {
        // briggs, color, letter
        type: 'F,Blue,B',
        content: 'DA!',
      },
      {
        type: 'F,Blue,B,No',
        content: 'NE!',
      },
    ],
  },
  // question #39
  {
    question: 'Treba mi vremena da se napunim.',
    answers: [
      {
        // briggs, color, letter
        type: 'I,Green,C',
        content: 'DA!',
      },
      {
        type: 'I,Green,C,No',
        content: 'NE!',
      },
    ],
  },
  // question #40
  {
    question: 'Volim da svoju sobu održavam organizovanom i čistom.',
    answers: [
      {
        // briggs, color, letter
        type: 'J,Brown,D',
        content: 'DA!',
      },
      {
        type: 'J,Brown,D,No',
        content: 'NE!',
      },
    ],
  },
]

export default quizQuestions
