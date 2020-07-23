import { Subject } from 'rxjs';

export class AppareilService {
  deleteOne(index: number) {
    if (confirm("Etes vous sûr de vouloir supprimer cet appareil ?")) {
      this.appareils.pop()
      this.emitAppareilSubject();  
    }
    
  }
  switchOnOne(i: number) {
    this.appareils[i].appareilStatus = 'allumé';
    this.emitAppareilSubject();
  }
  appareilsSubject = new Subject<any[]>();

  private appareils = [
    {
      id: 1,
      appareilName: 'Akai mpc',
      appareilStatus: 'éteint'
    },
    {
      id: 2,
      appareilName: 'Akai fire',
      appareilStatus: 'éteint'
    },
    {
      id: 3,
      appareilName: 'Launchkey 49',
      appareilStatus: 'éteint'
    },
  ];  

  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.appareilStatus = 'allumé'
    }
    this.emitAppareilSubject();
  }

  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.appareilStatus = 'éteint'
    }
    this.emitAppareilSubject();
  }

 

  switchOffOne(i: number) {
    this.appareils[i].appareilStatus = 'éteint';
    this.emitAppareilSubject();
  }

  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      appareilName: '',
      appareilStatus: ''
    };
    appareilObject.appareilName = name;
    appareilObject.appareilStatus = status;
    appareilObject.id =
      this.appareils[(this.appareils.length - 1)].id + 1;
    
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }
}