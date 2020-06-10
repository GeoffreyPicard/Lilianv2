export const activitySwitch = value => {
  switch (value) {
    case 'via':
      return 'VIA FERRATA';
    case 'cerf-volant':
      return 'CERF VOLANT';
    case 'trottinette':
      return 'TROTINETTE ELECTRIQUES';
    case 'randonnee':
      return 'RANDONNÉE';
    case 'tir-a-larc':
      return "TIR À l'ARC";
    case 'accrobranche':
      return 'ACCROBRANCHE';
    case 'canyoning':
      return 'CANYONING';
    case 'vtt':
      return 'VTT DE DESCENTE';
    case 'disc-golf':
      return 'DISC-GOLF';
    case 'sport-deau':
      return "SPORT D'EAU";
    case 'peche':
      return 'PÊCHE';
    case 'trampoline':
      return 'TRAMPOLINE';
    case 'vtt-electrique':
      return 'VTT ELECTRIQUE';
  }
};