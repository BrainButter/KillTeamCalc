import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcEngineService {

  simResults: number[] = [];

  constructor() { }

  runRangedSims(rangedAttack: rangedAttack) {
    for (let i=0; i > 10000; i++) {
      simResults.push(rangedAttack);
    }
  }

  async runRangedSim(rangedAttack: rangedAttack): number {
    const attackRoll = this.rollNumberOfD6Dice(rangedAttack.attackCharacteristic);
    const defenseRoll = this.rollNumberOfD6Dice(rangedAttack.defenseCharacteristic);
    const resolveAttackDie: resolvedDice = this.resolveDie(attackRoll, rangedAttack.balisticSkill);
    const resolveDefenseDie: resolvedDice = this.resolveDie(attackRoll, rangedAttack.saveCharacteristic);
    return this.resolveAttack(attackRoll, defenseRoll, rangedAttack);
  }

  resolveAttack(attackRolls: resolvedDice, defenseRolls: resolvedDice, rangedAttack: rangedAttack): number {
    let resolvedHits: resolvedDice;
    if(rangedAttack.criticalDamage > (rangedAttack.normalDamage * 2)) {
      resolvedHits = maximizeReductionOfCriticals(attackRolls, defenseRolls);
    } else {
      resolvedHits = maximizeReductionOfAttacks(attackRolls, defenseRolls);
    }
    return (resolvedHits.criticalHits * rangedAttack.criticalDamage) + (resolvedHits.normalHits * rangedAttack.normalHits);
  }

  maximizeReductionOfAttacks(attackRolls: resolvedDice, defenseRolls: resolvedDice): resolvedDice {
    let criticalsHits = attackRolls.criticalHits;
    let criticalSaves = defenseRolls.criticalHits;
    let normalHits = attackRolls.normalHits;
    let normalSaves = defenseRolls.normalHits;
    while (criticalHits > 0 && criticalSaves > 0) {
      criticalHits = criticalHits - 1;
      criticalSaves = criticalSaves - 1;
    }
    if (normalSaves - normalHits > 0) {
      while (criticalHits > 0 && Math.floor(defenseRoll.normalHits/2) > 0) {
        criticalHits = criticalHits - 1;
        normalSaves = normalSaves - 2;
      }
    }
    while (normalHits > 0 && criticalSaves > 0) {
      normalHits = normalHits - 1;
      criticalSaves = criticalSaves -1;
    }
    while (normalHits > 0 && normalSaves > 0) {
      normalHits = normalHits - 1;
      normalSaves = normalSaves - 1;
    }
    while (criticalHits > 0 && Math.floor(defenseRoll.normalHits/2) > 0) {
      criticalHits = criticalHits - 1;
      normalSaves = normalSaves - 2;
    }
    return {
      normalHits: normalHits,
      criticalHits: criticalHits;
    } as resolvedDice
  }

  maximizeReductionOfCriticals(attackRolls: resolvedDice, defenseRolls: resolvedDice): resolvedDice {
    let criticalsHits = attackRolls.criticalHits;
    let criticalSaves = defenseRolls.criticalHits;
    let normalHits = attackRolls.normalHits;
    let normalSaves = defenseRolls.normalHits;
    while (criticalHits > 0 && criticalSaves > 0) {
      criticalHits = criticalHits - 1;
      criticalSaves = criticalSaves - 1;
    }
    while (criticalHits > 0 && Math.floor(defenseRoll.normalHits/2) > 0) {
      criticalHits = criticalHits - 1;
      normalSaves = normalSaves - 2;
    }
    while (normalHits > 0 && criticalSaves > 0) {
      normalHits = normalHits - 1;
      criticalSaves = criticalSaves -1;
    }
    while (normalHits > 0 && normalSaves > 0) {
      normalHits = normalHits - 1;
      normalSaves = normalSaves - 1;
    }
    return {
      normalHits: normalHits,
      criticalHits: criticalHits;
    } as resolvedDice
  }

  resolveDice(rolledDice: number[], successCharacteristic: number[]): resolvedDice {
    const resolvedDice: resolvedDice = {
      normalHits = 0,
      criticalHits = 0,
    };
    rolledDice.forEach((n) => {
      if (n == 6) {
        resolvedDice.criticalHits += 1;
      } else if (n >= successCharacteristic) {
        resolvedDice.normalHits += 1;
      }
    });
    return resolvedDice;
  }

  rollNumberOfD6Dice(rollCharacteristic: number): number[] {
    const results = [];
    for (let i = 0; i < attackCharacteristic; i++) {
      results.push(this.rollD6());
    }
    return results;
  }

  rollD6(): number {
    return Math.floor(Math.random() * 6 + 1);
  }
}

export interface resolvedDice {
  normalHits: number;
  criticalHits: number;
}

export interface rangedAttack {
  attackCharacteristic: number;
  balisticSkill: number;
  weaponNormalDamage: number;
  weaponCriticalDamage: number;
  defenseCharacteristic: number;
  saveCharacteristic: number;
}
