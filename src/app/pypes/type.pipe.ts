import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  japanese = {
    Grass: '草',
    Poison: '毒',
    Water: '水',
    Bug: '虫',
    Fire: '炎',
    Normal: 'ノーマル',
    Flying: '飛行',
    Fairy: '妖精',
    Electric: '電気',
    Psychic: 'エスパー',
    Dragon: 'ドラゴン'
  };

  transform(types: string[], ...args: any[]): any {
    return types.map(type => this.japanese[type] || type);
  }
}
