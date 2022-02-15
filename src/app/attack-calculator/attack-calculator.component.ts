import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attack-calculator',
  templateUrl: './attack-calculator.component.html',
  styleUrls: ['./attack-calculator.component.scss']
})
export class AttackCalculatorComponent implements OnInit {

  public attackCharacteristic: number = 0;
  public weaponSkill: number = 0;
  public normalDamage: number = 0;
  public criticalDamage: number = 0;
  public averageDamage: number = 0;
  public averageNormalDamage: number = 0;
  public averageCriticalDamage: number = 0;
  public defenseCharacteristic: number = 0;
  public saveCharacteristic: number = 0;
  public averageNormalDamageBlocked: number = 0;
  public averageCriticalDamageBlocked: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  resultCalc() {
    this.averageCriticalDamage = this.probabilityOfCriticalAttack() * this.criticalDamage;
    this.averageCriticalDamageBlocked = this.probabilityOfCriticalSave() * this.criticalDamage;
    this.averageNormalDamage = this.probabilityOfNormalAttack() * this.normalDamage;
    this.averageNormalDamageBlocked = this.probabilityOfNormalSave() * this.normalDamage;
    this.averageDamage = (this.averageCriticalDamage - this.averageCriticalDamageBlocked)
      + (this.averageNormalDamage - this.averageNormalDamageBlocked);
  }

  probabilityOfNormalAttack() {
    const probabilityNormal = ((6 - this.weaponSkill) / 6) * this.attackCharacteristic;
    return probabilityNormal;
  }

  probabilityOfNormalSave() {
    const probabilityNormalSave = ((6 - this.saveCharacteristic) / 6) * this.defenseCharacteristic;
    return probabilityNormalSave;
  }

  probabilityOfCriticalAttack() {
    const probabilityCritical = (1 / 6) * this.attackCharacteristic;
    return probabilityCritical;
  }

  probabilityOfCriticalSave() {
    const probabilityCritical = (1 / 6) * this.defenseCharacteristic;
    return probabilityCritical;
  }

}
